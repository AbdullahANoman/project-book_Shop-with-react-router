import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ShowBooks from '../ShowBooks/ShowBooks';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Books = () => {
    const navigation = useNavigation()
    if(navigation.state === 'loading'){
    return  (
      <LoadingSpinner></LoadingSpinner>
    )
    }
    const data = useLoaderData()
    const books = data.books;
    
    return (
        <div className='my-container'>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-6  lg:grid-cols-4 '>
            {
                books.map((book) =>(
                    <ShowBooks key = {book.isbn13} book={book}></ShowBooks>
                ))
            }
        </div>
        </div>
    );
};

export default Books;