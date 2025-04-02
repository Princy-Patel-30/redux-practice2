import React from 'react'
import { useSelector } from "react-redux";

const Counter = () => {
    const books = useSelector((state) => state.books);
    const totalBooks = books.length;
    const totalRead = books.filter((book) => book.readStatus === "true").length;
    const totalUnread = books.filter((book) => book.readStatus === "false").length;
    return (
        <div>
          <p>Total Unread: {totalUnread}</p>
          <p>Total Read: {totalRead}</p>
          <p>Total Books: {totalBooks}</p>
        </div>
      );
    };
    
    export default Counter;