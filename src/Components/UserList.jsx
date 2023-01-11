import { useEffect, useState } from "react";
import '../Styles/UserList.css'
const UserList = () => {
    let[Users,setUsers]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let reponse=await fetch(' http://localhost:4000/Users')
            let Data=await reponse.json()
            setUsers(Data)
        }
        fetchdata()
    },[])
    let handle=(id,name)=>{
        setUsers(Users.filter(x=>x.id!=id))
        alert(`${name} has been removed`)
    }
    return ( 
        <div className="userlist">
            <h1>User List:{Users.length}</h1>
            <div className="Userssection">
                {Users.map((data=>
                  <div className="userl">
                    <h3>Name:{data.name}</h3>
                    <h3>Age:{data.age}</h3>
                    <h3>Email:{data.email}</h3>
                    <h3>Phone:{data.phoneNumber}</h3>
                    <button onClick={()=>handle(data.id,data.name)}>Remove</button>
                  </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;