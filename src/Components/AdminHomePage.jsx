import AdminNavbar from "./AdminNavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashBoard from "./AdminDashBoard";
import BookList from "./BookList";
import UserList from "./UserList";
import ReadBook from "./ReadBook";
import AddBook from "./AddBook";
import AddUser from "./AddUser";
const AdminHomePage=()=>{
    return(
        <div className="adminhomepage">
          <AdminNavbar/>
           <Routes>
            <Route path="/" element={<AdminDashBoard/>}/>
            <Route path="/book-list" element={<BookList/>}/>
            <Route path="/user-list" element={<UserList/>}/>
            <Route path="/book-list/:id" element={<ReadBook/>}/>
            <Route path="/add-book" element={<AddBook/>}/>
            <Route path="/add-user" element={<AddUser/>}/>
           </Routes>
        </div>
    )
}
export default AdminHomePage;