import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/AdminLOgin.css'

const AdminLogin = () => {
    let [Email, setEmail] = useState("")
    let [Password, setPassword] = useState("")
    let navigate=useNavigate()
    let handle = (e) => {
        e.preventDefault();
        let Data={Email,Password}//data for admin
        //to admin validation
        if (Email=="admin@gmail.com" && Password==1111) {
            navigate('/admin/')//to navigate to admin home page
        } else {
             alert("Invalid password ");
        }
    }
    
    return (
        <div className="adminlogin">
            <div className="formContainer">
                <h1>Sign in</h1>
                <div className="forminput">
                    <form action="" onSubmit={handle}>
                        <div className="password">
                            <label htmlFor="Email">Email</label><br />
                            <input type="Email" required placeholder="Enter Email" value={Email} onChange={(a) => setEmail(a.target.value)} />
                        </div>
                        <div className="password">
                            <label htmlFor="Password">Password</label> <br />
                            <input type="Password" required placeholder="Enter Password" value={Password} onChange={(b) => setPassword(b.target.value)} />
                        </div>
                        
                            <button>Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;