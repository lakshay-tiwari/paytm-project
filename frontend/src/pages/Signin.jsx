import { useState , useEffect } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router"
import { API_URLS } from "../config";

export const Signin = ()=>{
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");

    if (token == null){
      setLoading(true);
    }

    axios.get(API_URLS.loginStatus,{
      headers: {
        Authorization: token 
      }
    }).then(()=>{
      setLoading(true);
      navigate("/dashboard");
    }).catch(()=>{
      setLoading(true);
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
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <div>
            <Heading label={"Signin"}/>
            <SubHeading label={"Enter your credentials to access your account"}/>
            <InputBox label={"Email"} placeholder={"johndoe@email.com"} onChange={(e)=> setUsername(e.target.value)}/>
            <InputBox label={"Password"} placeholder={"123456"} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <Button label={"Signin"} onClick={async ()=>{
            const response = await axios.post(API_URLS.signin,{
              username,
              password
            })
            if (response.data.token){
              const authtoken = response.data.token;
              const token = `Bearer ${authtoken}`
              localStorage.setItem("token" , token);
              navigate("/dashboard");
            }
          }}/>
          <BottomWarning label={"Don't have an account"} to={"/signup"} buttonText={"Signup"} />
        </div>
      </div>
    </div>
  )
}