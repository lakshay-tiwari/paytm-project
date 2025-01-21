import { useEffect, useState } from "react"
import { API_URLS } from "../config";
import axios from "axios"

export function Balance(){
  const [loading,setLoading] = useState(false);
  const [balance,setBalance] = useState(0);
  
  useEffect(()=>{
    axios.get(API_URLS.accountBalance,{
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      setLoading(true)
      setBalance(response.data.balance)
    }).catch((err)=> console.log("Person might not log in || Some Error Occurs"));
  },[])

  if (loading === false) return (
    <div className="font-bold text-lg pl-4 mt-5">
      Loading Your Balance...
    </div>
  )
  return (
    <div className="flex pl-4 mt-5">
      <div className="font-bold text-lg">
        Your balance
      </div>
      <div className="font-semibold text-lg ml-4">
        Rs {balance}
      </div>
    </div>
  )
}