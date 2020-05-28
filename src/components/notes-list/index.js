import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotesList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {
            this.props.notesListData.map((item) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

// State from the store will become props to our component
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, 'the props that a component has');

  return {
    notesListData: state.notes.map((note) => {
      return `${note} -– ${ownProps.title}`
    })
  }
}

export default connect(
  mapStateToProps
)(NotesList);

// export default NotesList;