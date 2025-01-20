import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router"
import axios from "axios";

export const SendMoney = ()=>{
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");
  const [amount , setAmount] = useState(0);
  const navigate = useNavigate();
  /*
    You can also do like this
      const [searchParams] = useSearchParams();
      const id = searchParams.get("id");
      const name = searchParams.get("name");
  */
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex items-center">
        <div className="bg-white w-80 rounded-lg h-max text-center px-4">
          <div className="font-bold text-2xl m-5">Send Money</div>
          <div className="flex">
            <UserLogo letter={name[0]}/>
            <div className="flex items-center ml-3 font-semibold text-lg">{name}</div>
          </div>
          <div className="text-start mt-2">
            <div>
              Amounts in Rs
            </div>
            <div className="mt-2 mb-10">
              <input onChange={(e)=> setAmount(e.target.value)} type="text" className="border-2 w-full rounded-lg p-2" placeholder="Enter Amount"/>
              <button onClick={()=>initiatePayment(id,amount,navigate)} className="w-full bg-green-500 text-white focus:outline-none focus:ring-4 focus:ring-green-400 rounded-lg h-8 mt-4 hover:bg-green-400">Initiate Transfer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function UserLogo({letter}){
  return (
    <div className="rounded-full w-12 h-12 bg-green-500 flex justify-center">
      <div className="flex items-center text-white">
        {letter}
      </div>
    </div>
  )
}

async function initiatePayment(id,amount,navigate){

  axios.post("http://localhost:3000/api/v1/account/transfer",{
    to: id,
    amount: amount
  },{
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }).then((res)=> {
      console.log(res.data.message)
        navigate("/dashboard");
      })
      .catch((err) => console.log("Error occurs", err));
  
}
