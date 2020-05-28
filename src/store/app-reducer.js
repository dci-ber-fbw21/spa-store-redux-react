const initialState = {
  notes: [
    'item 123',
    'item 456',
    'item 9876',
  ]
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload.note]
      }
    default:
      return state;
  }
}

export default appReducer;