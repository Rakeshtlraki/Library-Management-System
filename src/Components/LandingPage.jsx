import { Link } from "react-router-dom";
import '../Styles/LandingPage.css'
const LandingPage = () => {
    return (
        <div className="landingPage">
            
            <div className="selectLoginTypeContainer">
                <h1>Library Mangement System</h1>
                <div className="images">
                    <img id="img1" src="Images/Logo7.jpeg" alt="" />
                    <img id="img2" src="Images/Logo8.jpeg" alt="" />
                </div>
                <div className="btn">
                    <button className="btn1"><Link to='/admin-login'>ADMIN</Link></button>
                    <button className="btn2"><Link to='/user-login'>USER</Link></button></div>
            </div>
        </div>
    )
}
export default LandingPage;