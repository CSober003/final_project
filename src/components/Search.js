import React, { useState } from "react";
import axios from 'axios';
import Book from '../components/Book';

function Search() {

  const [word, setWord] = useState([])
  const [result, setResult] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get("https://se-book-store.herokuapp.com/api/v1/books")
    .then((response) => {
      setResult(response.data);
    })
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center text-header-h1">Search Component</h1>
        <div className="row">
        <div className="col-3"></div>
          <div className="col-6">
        <form onSubmit={handleSubmit}>
          <div className="fix-input-text input-group text-center">
            <input
              onChange={(e) => setWord(e.target.value)}
              className="form-control"
              type="text"
              placeholder="ข้อความสำหรับการค้นหา"/>
                <div className="input-group-append">
                  <button type="submit" className="btn btns px-5">
                    ค้นหา
                  </button>
            </div>
          </div>
        </form>
        </div>
          <div className="col-3"></div>

        </div>
      </div>
      <Book id={result} search={word} />
    </>
  )
}

export default Search;