import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Books from './Components/Books/Books';
import BookDetails from './Components/BookDetails/BookDetails';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement :<Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path: 'about',
        element : <About></About>
      },
      {
        path : 'books',
        element : <Books></Books>,
        loader : () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path : 'book/:bookId',
        element : <BookDetails></BookDetails>,
        loader : ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);