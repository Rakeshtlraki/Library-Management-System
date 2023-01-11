import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
   let parameter=useParams()
   let[book,setbook]=useState([])
   useEffect(()=>{
      let fetchData=async()=>{
         let response=await fetch(`http://localhost:4000/books/${parameter.id}`)
         let Data=await response.json()
         setbook(Data)
      }
      fetchData()
})
    return ( 
        <div className="readBook">
         <h2>{book.title}</h2>   
         <div className="info">
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
            </div> 
        </div>
     );
}
 
export default ReadBook;