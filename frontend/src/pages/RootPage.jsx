import { useEffect } from "react";
import { useNavigate } from "react-router";
import { API_URLS } from "../config";
import axios from "axios";

export function RootPage(){

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
    }).then(()=>{
      navigate("/dashboard");
    }).catch(()=>{
      navigate("/signin");
    })

  },[]);


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