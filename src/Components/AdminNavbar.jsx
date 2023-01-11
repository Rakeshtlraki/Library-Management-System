import { Link } from "react-router-dom";
import '../Styles/AdminNavbar.css'
const AdminNavbar = () => {
    return (
        <div className="adminavbar">
            <div className="ad">
                <h1>Admin Adda</h1>
            </div>
            <div className="navbar"> 
                <ul>
                    <li><Link to="/admin/">Home</Link></li>
                    <li><Link to="/admin/add-book">Add Books</Link></li>
                    <li><Link to="/admin/add-user">Add Users</Link></li>
                    <li><Link to="/admin/book-list">Book List</Link></li>
                    <li><Link to="/admin/user-list">User List</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AdminNavbar;