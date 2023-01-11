import { Link } from "react-router-dom";
import '../Styles/AdminNavbar.css'
const UserNavbar = () => {
    return (
        <div className="adminavbar">
            <div className="ad">
                <h1>USER PORTAL</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                    <li><Link to="/user/">Home</Link></li>                    
                    <li><Link to="/user/book-list">Book List</Link></li>                   
                    <li><Link to="/">Logout</Link></li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserNavbar;