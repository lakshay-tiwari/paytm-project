import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"

export const Signup = ()=>{
  const [firstName,setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername] = useState('');
  const navigate = useNavigate();
  
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Signup"} />
            <SubHeading label={"Enter your information to create an account"} />
            <div>
              <InputBox label={"First Name"} onChange={(e)=> setFirstName(e.target.value)} placeholder={"John"}/>
              <InputBox label={"Last Name"} onChange={(e) => setLastName(e.target.value)} placeholder={"Doe"}/>
              <InputBox label={"Email"} onChange={(e) => setUsername(e.target.value)} placeholder={"johndoe@email.com"}/>
              <InputBox label={"Password"} onChange={(e) => setPassword(e.target.value)} placeholder={"123456"}/>
            </div> 
            <Button onClick={async ()=>{
              const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                username,
                password,
                firstName,
                lastName
              })
              if (response.data.token){
                const token = response.data.token;
                localStorage.setItem("token" , `Bearer ${token}`);
                navigate("/dashboard");
              }
            }} label={"Sign up"} />
            <BottomWarning label={"Already have an account"} to={"/signin"} buttonText={"Sign in"}/>
        </div>
      </div>
    </div>
  )
}