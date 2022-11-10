import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
      return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
          <Link to="/" className="navbar-brand p-1">Books Archive</Link>
          <div className="container">
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              <Link to="/" className="nav-link">Books</Link>
              </li>
              <li className="navbar-item">
              <Link to="/book/create" className="nav-link">Add Book</Link>
              </li>
              <li className="navbar-item">
              <Link to="/author" className="nav-link">Author</Link>
              </li>
              <li className="navbar-item">
              <Link to="/author/create" className="nav-link">Add Author</Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      );
    }
  }