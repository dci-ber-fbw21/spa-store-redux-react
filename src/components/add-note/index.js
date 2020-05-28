import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddNote extends Component {
  // Local state
  state = {
    noteInput: ''
  };

  render() {
    return (
      <div>
        <form onSubmit={
          (e) => {
            e.preventDefault();

            // Check for empty spaces
            if (!this.state.noteInput.trim()) {
              return false;
            }

            // Add only if there was input
            this.props.addNewNote(this.state.noteInput);

            // Clean up field
            this.setState({
              noteInput: ''
            });
          }
        }>
          <label>Add note</label>
          <input type="text" value={this.state.noteInput} onChange={
            (e) => {
              this.setState({
                noteInput: e.target.value
              })
            }
          } />

          <button>Add note</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteText) => {
      console.log(noteText);
      const action = {
        type: 'ADD_NOTE',
        payload: {
          note: noteText
        }
      }

      dispatch(action)
    }
  }
};

// Connect component to store
export default connect(
  // To get props from the store state
  null,
  // To get methods that update the store state
  mapDispatchToProps
)(AddNote);

// How we used to export components that are not connected to the store
// export default AddNote;