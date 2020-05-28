import React from 'react';
import NotesList from './components/notes-list';
import AddNote from './components/add-note';

function App() {
  return (
    <div className="App">
      <AddNote />
      <NotesList title="My notes list" randomProp="hey" />
    </div>
  );
}

export default App;
