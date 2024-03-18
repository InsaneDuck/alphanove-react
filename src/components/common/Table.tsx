import {Book} from "../../types/Book";
import React from "react";

type BookTableProps = {
  books: Book[];
}

export const BookTable: React.FC<BookTableProps> = ({books}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Availability</th>
        <th>Publication Year</th>
        <th>Genre</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {books.map(book => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.availability ? 'Available' : 'Not Available'}</td>
          <td>{book.publicationYear}</td>
          <td>{book.genre}</td>
          <td>{book.price}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};
