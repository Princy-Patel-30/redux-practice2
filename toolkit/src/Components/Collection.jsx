    import React from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { deletebook , setupdatebook ,searchbook, filter1} from "../Redux/BookSlice";
    import Counter from "./Counter";

    const Collection = () => {
    const books = useSelector((state) => state.book.books);
    const search = useSelector((state) => state.book.search);
    const filterdata =useSelector(s=>s.book.filter);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(searchbook(e.target.value));
      };

      const handlesort = (e) => {
        dispatch(filter1(e.target.value));
      };
    let filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
      );


  if (filterdata === "read") {
    filteredBooks = filteredBooks.filter((book) => book.readStatus === "true");
  } else if (filterdata === "unread") {
    filteredBooks = filteredBooks.filter((book) => book.readStatus === "false");
  }

    return (
        <div>
            <label>Search:</label>
      <input type="text"
      value = {search}
      onChange={handleSearch}
      />
      <label>Sort by:</label>
      <select onChange = {handlesort}>  
        <option value="select"  >Select</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
      </select>

<Counter/>
        {filteredBooks.map((book) => (
            <div key={book.id}> 
            <ul>
                <li>Title: {book.title}</li>
                <li>Author: {book.author}</li>
                <li>Read Status: {book.readStatus === "true" ? "read" : "unread"}</li>
                <li>Category: {book.category}</li>
            </ul>
            <button onClick={() => dispatch(setupdatebook(book))}>Edit</button>
            <button onClick={() => dispatch(deletebook(book.id))}>Delete</button> 
            </div>
        ))}
        </div>
    );
    };

    export default Collection;
