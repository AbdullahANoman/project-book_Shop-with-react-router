import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ShowBooks = ({ book }) => {
  const { image, title, subtitle, price,isbn13 } = book;

  const navigation = useNavigation()
  if(navigation.state === 'loading'){
    return  (
      <LoadingSpinner></LoadingSpinner>
    )
  }
  return (
    <Link to={`/book/${isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl p-5 mb-3">
        <img
          src={image}
          alt="book cover"
          className="object-cover w-full h-56 md:h-64 lg:h-80"
        />
        <div className="bg-black px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
          <p className="text-xl font-bold">{title}</p>
          <br />
          <p>{subtitle.substring(0, 45)}...</p>
          <br />
          <p className="mt-auto text-2xl font-bold">Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ShowBooks;
