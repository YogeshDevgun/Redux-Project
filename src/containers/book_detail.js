import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {

    if(!this.props.book){
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>
          Details for:
        </h3>
        <div>{this.props.book.title}</div>
        <h3>Pages:</h3>
        <span>{this.props.book.pages}</span>

    </div>
    )
  }
}

function mapStateToProps(state) {
  return {book: state.activeBook};
}

export default connect(mapStateToProps,null)(BookDetail);
