import React, { useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const BookDetails = () => {
  const navigation = useNavigation()
  if(navigation.state === 'loading'){
    return (
      <LoadingSpinner></LoadingSpinner>
    )
  }
  const data = useLoaderData();
  const [fold, setFold] = useState(true);
  const { authors, image, rating, year, price, title, publisher, desc,url } = data;
  console.log(data);
  const openWindow = (url) =>{
    window.open(url)
  }
  
  return (
    <div className="my-container2">
      <div className=" border grid grid-cols-1  md:grid-cols-2 overflow-hidden items-center shadow-xl">
        <div className="h-full">
          <img
            src={image}
            alt="book-cover-image"
            className="object-cover w-full "
          />
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

          {fold ? (
            <>
              {" "}
              <p>
                {desc.substring(0, 100)}{" "}
                <span
                  onClick={() => setFold(!fold)}
                  className="font-bold cursor-pointer"
                >
                  {" "}
                  read more ....
                </span>
              </p>{" "}
            </>
          ) : (
            <>
              <p>{desc}</p>
            </>
          )}

          <div className="flex items-center  mt-5 gap-5">
            <Link><button onClick={()=>openWindow(url)} className="btn ">Buy Now</button></Link>
            <p className="font-bold text-xl">Price:{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
