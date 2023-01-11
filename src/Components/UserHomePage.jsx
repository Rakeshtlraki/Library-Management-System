import { Routes,Route } from "react-router-dom";
import BookList from "./BookList";
import UserDashBoard from "./UserDashBoard";
import UserNavbar from "./UserNavbar";
import ReadBook from "./ReadBook";

const UserHomePage = () => {
    return ( 
        <div className="userHOmePage">
            <UserNavbar/>
           <Routes>
           <Route path="/" element={<UserDashBoard/>}/>
           <Route path="/book-list" element={<BookList/>}/>
           <Route path="/book-list/:id" element={<ReadBook/>}/>
           </Routes>
        </div>
     );
}
 
export default UserHomePage;