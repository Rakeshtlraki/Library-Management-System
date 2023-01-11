import '../Styles/AddBook.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle]=useState("")
    let [authors,setauthors]=useState("")
    let [categories,setcategories]=useState("")
    let [pageCount,setpageCount]=useState("")
    let [shortDescription,setshortDescription]=useState("")
    let [longDescription,setlongDescription]=useState("")
    let [thumbnailUrl,setthumbnailUrl]=useState("")

    let navigate=useNavigate()
    let handle=(e)=>{
        e.preventDefault();
        //data to be hosted
        let BOOKDATA={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
        //posting to server
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(BOOKDATA)
        })
        alert('Book added sucessfully')
        navigate("/admin/book-list")
    }
    
    return (<div className="user">
              <h1>ADD-BOOK</h1>
              <div className="foorm">
                <form onSubmit={handle} >
                    <div className="tiitle">
                      <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter the Title of the Book" required />
                    </div>
                    <div className="tiitle">
                        <input value={authors} onChange={(f)=>setauthors(f.target.value)} type="text" placeholder="Enter the authors of the Book" required />
                    </div>
                    <div className="tiitle">
                        <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text" placeholder="Enter the categories of the Book" required/>
                    </div>
                    <div className="tiitle">
                        <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)} type="num" placeholder="Enter the pageCount of the Book" required />
                    </div>
                    <div className="tiitle">
                    <textarea value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} name="shortDescription" id="" cols="150" rows="3" placeholder="Enter the shortDescription of the Book"></textarea>
                    </div>
                    <div className="tiitle">
                       <textarea value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} name="longDescription" id="" cols="150" rows="3" placeholder="Enter the longDescription of the Book"></textarea>
                    </div>
                    <div className="tiitle">
                        <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text" placeholder="Upload a file"/>
                    </div>
                    <button>Add-Book</button>
                </form>
              </div>
    </div>  );
}
 
export default AddBook;