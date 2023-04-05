import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  const { authors, image, rating, year, price, title, publisher } = data;
  console.log(title);
  return (
    <div className="my-container2">
      <div className=" border grid grid-cols-1 md:grid-cols-2 overflow-hidden items-center">
        <div className="h-full">
          <img src={image} alt="book-cover-image" className="object-cover w-full " />
        </div>
        <div className="px-16 py-5">
          <p className="badge">
            <small>Brand New</small>
          </p>
          <h1 className="text-4xl font-bold mb-5">{title}</h1>
          <span className="text-lg font-semibold ">
            <p>Authors : {authors}</p>
            <p>Publisher : {publisher}</p>
            <p>Year : {year}</p>
            <p>Rating: {rating}</p>
          </span>

        </div>
      </div>
    </div>
  );
};

export default BookDetails;
