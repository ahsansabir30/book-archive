import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Book = props => (
    <div className="card m-3" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Author: {props.book.author}</li>
            <li className="list-group-item">Publish Date: {props.book.published_date.substring(0,10)}</li>
            <li className="list-group-item">ISBN: {props.book.isbn}</li>
        </ul>
        <div className="card-body">
            <Link to={"/book/update/"+props.book._id} className="text-decoration-none">Update</Link>
            <a href="/#" className="text-decoration-none text-danger" style={{float: "right"}} onClick={() => {props.deleteBook(props.book._id)}}>Delete</a>
        </div>
    </div>   
)

export default class BookList extends Component {
    constructor(props){
        super(props);
        this.deleteBook = this.deleteBook.bind(this);
        this.state = {books: []};
    }

    componentDidMount() {
        axios.get('/backend/books/')
            .then(response => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteBook(id) {
        axios.delete('/backend/books/'+id)
            .then(response => console.log(response.data));
        this.setState({
            // el stands for every element
            // the filter commands => for every element in array, 
            // if the element id does not equal to the id we are deleting it will pass it back to the array
            books: this.state.books.filter(el => el._id !== id)
        })
    }

    bookList() {
        return this.state.books.map(book => {
            return <Book book={book} deleteBook={this.deleteBook} key={book._id}/>;
        })
    }

    render() {
        return(
            <div className="container m-5">
                <div className="row">{ this.bookList() }</div>
            </div>
        );
    }
}