import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import {Book} from "../types/Book";

import {BookTable} from "../components/common/Table";

export const Books = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([])


  useEffect(() => {
    console.log(Cookies.get('token'))
    if (Cookies.get("token") !== undefined) {
      setLoggedIn(true);
    }
  }, [])

  useEffect(() => {
    const getBooks = async () => {
      const response = await axios.request({
        url: 'http://localhost:8080/books',
        method: 'get',
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}}`
        }
      });
      console.log("fetching")
      return await response.data;
    }

    if (loggedIn) {
      getBooks().then(data => {
        console.log(data._embedded.books)
        setBooks(prevState => [...prevState, ...data._embedded.books])
      })
    }

  }, [loggedIn]);

  return <div>
    {Cookies.get("token") ? <BookTable books={books}/> : <h1>Login to view books data</h1>}
  </div>
}

