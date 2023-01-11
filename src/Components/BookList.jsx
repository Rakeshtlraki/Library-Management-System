import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Styles/BookList.css'
import { useNavigate } from "react-router-dom";


const BookList = () => {
    let [Books, setBook] = useState([])
    let navigate = useNavigate()
    let parameter=useParams()
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/books')
            let Data = await response.json()
            setBook(Data)
        }
        fetchData()
    }, [Books])

    let remove = (id, title) => {
        fetch(`http://localhost:4000/books/${id}`, {
            method: 'DELETE'
        })
        alert(`${title} will be deleted peramanently`)
    }
    let handle = (id) => {
        navigate(`/admin/book-list/${id}`)
    }
    return (
        <div className="booklist">
            <h1>Book List: {Books.length}</h1>
            <div className="booksSection">
                {Books.map(data => (
                    <div className="books">
                        <div className="bk">
                            <div className="image">
                                <a href="data.shortDescription"><img src={data.thumbnailUrl} alt="" /></a>
                            </div>
                            <div className="bok">
                                <h3>{data.title}</h3>
                                <h3>Authors : {data.authors}</h3>
                                <h4>PageCount : {data.pageCount}</h4>
                                <h4>Categories : {data.categories}</h4>
                                <button className="btn" onClick={() => handle(data.id)}>Read more....</button>
                                <button className="btn" onClick={() => remove(data.id, data.title)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;