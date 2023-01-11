import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Adduser.css'

const AddUser = () => {
    let [name, setname] = useState("")
    let [age, setage] = useState("")
    let [email, setemail] = useState("")
    let [phoneNumber, setphoneNumber] = useState("")
    let navigate=useNavigate()
    let handle=(e)=>{
        e.preventDefault();
        let USERDATA={name,age,email,phoneNumber}
        fetch('http://localhost:4000/Users',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(USERDATA)
        })
        alert('user added successfully')
        navigate('/admin/user-list')
    }
    return (
        <div className="user">
            <h1>ADD-USERS</h1>
                    
            <div className="form">               
                <form action="" onSubmit={handle}>
                    <div className="title">
                        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter the Name" />
                    </div>
                    <div className="title">

                        <input value={age} onChange={(e)=>setage(e.target.value)} type="num" min="1" placeholder="Enter your Age" />
                    </div>
                    <div className="title">

                        <input value={email} onChange={(e)=>setemail(e.target.value)} type="Email" placeholder="Enter your Email" />
                    </div>
                    <div className="title">

                        <input value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} type="tel" placeholder="Enter your PhoneNUmber" minLength={10} maxLength={11} />
                    </div>
                    <button>AddUser</button>
                </form>
            
           </div>
        </div>
    );
}
export default AddUser;