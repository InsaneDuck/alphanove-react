import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {Book} from '../types/Book'

import {BASE_URL} from "./api-endpoints"

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      'Authorization': `Bearer `
    }
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<Book, string>({
      query: () => `books`,
    }),
  }),
})

export const {useGetBooksQuery} = booksApi