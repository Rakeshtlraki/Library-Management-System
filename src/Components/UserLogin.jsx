import { useNavigate } from "react-router-dom"
import '../Styles/UserLOgin.css'
const UserLogin = () => {
    let navigate=useNavigate()
    let handle=(e)=>{
        e.preventDefault()
       navigate('/user/')
    }
    return (
        <div className="userlogin">
            <div className="formContainer">
                <h1>Login as User</h1>
                <div className="forminput">
                    <form action="" onSubmit={handle}>
                        <div className="password">
                            <label htmlFor="Email">Email</label><br />
                            <input type="Email"placeholder="Enter Email"/>
                        </div>
                        <div className="password">
                            <label htmlFor="Password">Password</label> <br />
                            <input type="Password"  placeholder="Enter Password"/>
                        </div>
                        <div className="btn">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UserLogin;