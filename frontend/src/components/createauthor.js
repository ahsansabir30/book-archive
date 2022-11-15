import React, { Component } from "react";
import axios from "axios"

export default class CreateBook extends Component {
    constructor(props){
        super(props);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            author:''
        }
    }
  
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }
   
    onSubmit(e) {
        e.preventDefault();
        const author = {
            author: this.state.author,
        }
        console.log(author)

        axios.post('/backend/authors/add', author)
            .then(res => console.log(res.data));

        window.location = '/'
    }

    render() {
        return(
            <div className="container-sm mx-auto pt-4" style={{width: "50%"}}>
                <h3>Add Author</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input type="text" required className="form-control" value={this.state.author} onChange={this.onChangeAuthor}></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}