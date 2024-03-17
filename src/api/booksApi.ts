import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import type {Book} from '../types/Book'

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Book, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const {useGetPokemonByNameQuery} = booksApi