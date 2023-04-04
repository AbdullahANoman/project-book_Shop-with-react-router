import React from 'react';

const ShowBooks = ({book}) => {
    const {image} = book;
    console.log(image)
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default ShowBooks;