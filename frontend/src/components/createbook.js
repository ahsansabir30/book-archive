import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"

export default class CreateBook extends Component {
    constructor(props){
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeISBN = this.onChangeISBN.bind(this);
        this.onChangePublishedDate = this.onChangePublishedDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title:'',
            author: '',
            authors: [],
            isbn: '',
            published_date: new Date(),
        }
    }

    componentDidMount() {
        axios.get('/backend/authors/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        authors: response.data.map(authors => authors.author),
                        author: response.data[0].author
                    })
                }
            })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }
    onChangeISBN(e) {
        this.setState({
            isbn: e.target.value
        })
    }
    onChangePublishedDate(date) {
        this.setState({
            published_date: date
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const book = {
            title: this.state.title,
            author: this.state.author,
            isbn: this.state.isbn,
            published_date: this.state.published_date
        }
        console.log(book)

        axios.post('/backend/books/add', book)
            .then(res => console.log(res.data));

        window.location = '/'
    }

    render() {
        return(
            <div className="container-sm mx-auto pt-4" style={{width: "50%"}}>
                <h3>Add Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" required className="form-control" value={this.state.title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <select required className="form-control" value={this.state.author} onChange={this.onChangeAuthor}>
                            {
                                this.state.authors.map(function(authors) {
                                    return <option key={authors} value={authors}>
                                                {authors}
                                            </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">ISBN</label>
                        <input type="text" required className="form-control" value={this.state.isbn} onChange={this.onChangeISBN}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <div>
                            <DatePicker selected={this.state.published_date} onChange={this.onChangePublishedDate}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}