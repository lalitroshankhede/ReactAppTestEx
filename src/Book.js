import React from 'react'
import "../src/Book.css";


const Book = (prop) => {

    const  {img,title,publisher,cost}=prop;

    return (


        <div className='book'>
           
            <div className='book-img'>
                <img src={img} alt='book-img' />
            </div>
            <div className='book-info'>
                <h2>{title} </h2>
                <p> {publisher} </p>
                <p>$ {cost}</p>
                <button>Add to Cart</button>
            </div>

        </div>
    )
}

export default Book
