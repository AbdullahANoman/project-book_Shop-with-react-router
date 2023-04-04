import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowBooks from '../ShowBooks/ShowBooks';

const Books = () => {
    const data = useLoaderData()
    const books = data.books;
    console.log(books)
    return (
        <div className='my-container grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 '>
            {
                books.map((book) =>(
                    <ShowBooks key = {book.isbn13} book={book}></ShowBooks>
                ))
            }
        </div>
    );
};

export default Books;