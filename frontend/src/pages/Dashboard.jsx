import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useNavigate } from "react-router"
import { API_URLS } from "../config";
import axios from "axios"

export const Dashboard = ()=>{
  const [firstName, setFirstName] = useState(' ');
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");

    if (token == null){
      navigate("/signin");
    }
    
    axios.get(API_URLS.loginStatus,{
      headers: {
        Authorization: token 
      }
    }).then((response)=>{
      setLoading(true);
      setFirstName(response.data.firstName);
    }).catch(()=>{
      navigate("/signin");
    })

  },[]);

  if (loading == false){
    return (
      <div className="flex justify-center h-screen bg-slate-200">
        <div className="flex items-center">
          <div className="font-bold text-3xl">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-100 h-screen">
      <Appbar letter={firstName[0]}/>
      <div>
        <Balance/>
        <Users />
      </div>
    </div>
  )
}

