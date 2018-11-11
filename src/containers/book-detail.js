import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    bookImageStyle = {
        height: '100' + 'px',
        width: '100' + 'px',
    }

    bookDetailStyle = {
        textAlign: 'center'
    }
    render() {
        if(!this.props.book) {
            return <div>Select a book to get started.</div>;
        }
        return (
            <div style={this.bookDetailStyle}>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
                <div>
                    <img style={this.bookImageStyle} src={this.props.book.src} alt={this.props.book.title + ' image'}/>
                </div>
                <hr />
                <h5># Of Pages {this.props.book.pages}</h5>
                <hr />
                <a href={this.props.book.url}>{'Get ' + this.props.book.title + ' on Amazon'}</a>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);