import { UserProfile } from "./UserProfile";
import { Button } from "./Button"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function Users(){
  const [users,setUsers] = useState([]);
  const [filter,setFilter] = useState('');
  console.log(users);
  useEffect(()=>{
    if (filter.trim() === ""){
      setUsers([]);
      return;
    }
    axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter , {
      headers:{
        Authorization: localStorage.getItem("token")
      }
    }).then((response)=>{
      setUsers(response.data.finalUsers);
    })
  },[filter])

  return (
    <>
      <div className="font-semibold px-5 mt-4">
        Users
      </div>
      <div className="px-5 mt-1">
        <input onChange={(e)=>setFilter(e.target.value)} type="text" className="border-2 w-full mt-1 shadow-sm rounded-lg p-2 border-slate-300 bg-slate-50" placeholder="Search Users..."/>
      </div>
      <div>
        {users.map((user)=>{
          return <User user={user} key={user._id}/>
        })}
      </div>
    </>
  )
}

function User({user}){
  const navigate = useNavigate();
  if (user == null) return (<></>);
  return (
    <div className="flex m-5 justify-between">
      <div className="flex items-center">
        <UserProfile letter={user.firstName[0]} />
        <div className="m-4">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="mr-5">
        <Button label={"Send Money"} onClick={()=> navigate("/send?id=" + user._id + "&name=" + user.firstName +"+"+ user.lastName)}/>
      </div>
    </div>
  )
}
