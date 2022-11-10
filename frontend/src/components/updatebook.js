import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"

export default class UpdateBook extends Component {
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
        const arr = window.location.href.split('/');
        axios.get('http://localhost:5000/books/'+arr[arr.length-1])
          .then(response => {
            this.setState({
              title: response.data.title,
              author: response.data.author,
              isbn: response.data.isbn,
              published_date: new Date(response.data.published_date)
            })   
          })
          .catch(function (error) {
            console.log(error);
          })
    
        axios.get('http://localhost:5000/books/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                authors: response.data.map(author => author.author),
              })
            }
          })
          .catch((error) => {
            console.log(error);
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
        const arr = window.location.href.split('/');
        axios.post('http://localhost:5000/books/update/' + arr[arr.length-1], book)
            .then(res => console.log(res.data));

        window.location = '/'
    }

    render() {
        return(
            <div className="container-sm mx-auto pt-4" style={{width: "50%"}}>
                <h3>Update Book</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input type="text" required className="form-control" value={this.state.title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <select required className="form-control" value={this.state.author} onChange={this.onChangeAuthor}>
                            {
                                this.state.authors.map(function(authors, index) {
                                    return <option key={index} value={authors}>
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
