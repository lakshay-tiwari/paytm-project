import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router"

export const Signin = ()=>{
  const [username , setUsername] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();
  
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
            const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
              username,
              password
            })
            if (response.data.token){
              const token = response.data.token;
              localStorage.setItem("token" , `Bearer ${token}`);
              navigate("/dashboard");
            }
          }}/>
          <BottomWarning label={"Don't have an account"} to={"/signup"} buttonText={"Signup"} />
        </div>
      </div>
    </div>
  )
}