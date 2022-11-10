import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Author = props => (
    <div className="card m-2">
        <div className="card-body d-flex flex-row justify-content-between">
            {props.author.author}
            <div className="text-right">
                <Link to={"/author/update/"+props.author._id} className="text-decoration-none">Update</Link>   <a href="/#" onClick={() => { props.deleteAuthor(props.author._id) }} className="text-decoration-none text-danger">Delete</a>
            </div>
        </div>
    </div>
)

export default class AuthorList extends Component {
    constructor(props){
        super(props);
        this.deleteAuthor = this.deleteAuthor.bind(this);
        this.state = {authors: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/authors/')
            .then(response => {
                this.setState({ authors: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAuthor(id) {
        axios.delete('http://localhost:5000/authors/'+id)
            .then(response => console.log(response.data));
        this.setState({
            authors: this.state.authors.filter(el => el._id !== id)
        })
    }

    authorList() {
        return this.state.authors.map(author => {
            return <Author author={author} deleteAuthor={this.deleteAuthor} key={author._id}/>;
        })
    }

    render() {
        return(
            <div className="container m-5">
                <div>{ this.authorList() }</div>
            </div>
        );
    }
}