import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar";
import BookList from "./components/booklist";
import UpdateBook from "./components/updatebook";
import CreateBook from "./components/createbook";
import AuthorList from "./components/authorlist";
import CreateAuthor from "./components/createauthor";
import UpdateAuthor from "./components/updateauthor";

function App() {
  return (
    <Router> 
      <Navbar /> 
      <Routes>
        <Route path="/" exact element={<BookList />} /> 
        <Route path="/book/create" element={<CreateBook />} />
        <Route path="/book/update/:id" element={<UpdateBook />} />  
        <Route path="/author" element={<AuthorList />} /> 
        <Route path="/author/create" element={<CreateAuthor />} />
        <Route path="/author/update/:id" element={<UpdateAuthor />} />
      </Routes> 
    </Router> 
  );
}

export default App;