import Book from "./Book";

import React from 'react'
import books from "./books.json";


const BookList = () => {
    return (
        <div>
            {books.map((ele)=>{
          return  <Book img={ele.image} 
            title={ele.title} 
            publisher={ele.author} 
            cost={ele.price} />

            })}
         

        </div>
    )
}

export default BookList
