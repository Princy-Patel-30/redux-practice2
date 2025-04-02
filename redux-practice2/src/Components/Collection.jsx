import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_Data, searchterm, filterstatus, set_Edit } from "../Redux/Action"; 
import Counter from "./Counter";
import "./Collection.css";

const Collection = () => {
  const [sortbyvalue, setsortbyvalue] = useState(""); 
  const books = useSelector((state) => state.books);
  const search = useSelector((state) => state.searchterm);
  const filter = useSelector((state) => state.filter); 
  const dispatch = useDispatch();

  const deletebook = (id) => {
    dispatch(delete_Data(id));
  };

  const editbook = (book) => {
    dispatch(set_Edit(book));
  };

  let filteredBooks = books.filter((book) =>
    book.Title.toLowerCase().includes(search.toLowerCase()) ||
    book.Author.toLowerCase().includes(search.toLowerCase())
  );

  if (filter === "read") {
    filteredBooks = filteredBooks.filter((book) => book.readStatus === "true");
  } else if (filter === "unread") {
    filteredBooks = filteredBooks.filter((book) => book.readStatus === "false");
  }

  

  const handlechange = (e) => {
    const value = e.target.value;
    setsortbyvalue(value);
    dispatch(filterstatus(value)); 
  };

  return (
    <div>
      <h1>Book Collection</h1>
      <p>List of books in this collection:</p>
      
      <label>Search:</label>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(searchterm(e.target.value))} 
      />

      <label>Sort by:</label>
      <select value={sortbyvalue} onChange={handlechange}> 
        <option value="">Select</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>
<Counter/>
      <ul>
        {filteredBooks.length > 0 ? (  
          filteredBooks.map((book) => (
            <li key={book.id}>
              <strong>Title:</strong> {book.Title} <br />
              <strong>Author:</strong> {book.Author} <br />
              <strong>Category:</strong> {book.category} <br />
              <strong>Read Status:</strong> {book.readStatus === "true" ? "Read" : "Not Read"}
              <div className="button-container">
                <button onClick={() => editbook(book)} style={{ backgroundColor: "green" }}>
                  Edit
                </button>
                <button onClick={() => deletebook(book.id)} style={{ backgroundColor: "red" }}>
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No books in the collection</p>
        )}
      </ul>
    </div>
  );
};

export default Collection;
