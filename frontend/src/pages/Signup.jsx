import { Heading } from "../components/Heading"
import { SubHeading } from "../components/SubHeading"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import { BottomWarning } from "../components/BottomWarning"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { API_URLS } from "../config";

export const Signup = ()=>{
  const [firstName,setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername] = useState('');
  const [loading , setLoading] = useState(false);
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
            <Heading label={"Signup"} />
            <SubHeading label={"Enter your information to create an account"} />
            <div>
              <InputBox label={"First Name"} value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder={"John"}/>
              <InputBox label={"Last Name"} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={"Doe"}/>
              <InputBox label={"Email"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder={"johndoe@email.com"}/>
              <InputBox label={"Password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={"123456"}/>
            </div> 
            <Button onClick={async ()=>{
<<<<<<< Updated upstream
              const response = await axios.post(API_URLS.signup,{
                username,
                password,
                firstName,
                lastName
              })
              if (response.data.token){
                const authToken = response.data.token;
                const token = `Bearer ${authToken}`
                localStorage.setItem("token" , token);
                navigate("/dashboard");
=======
              if (password.length < 6){
                toast.error('Password should be equal to or greater than 6 characters');
                return ;
              }
              try {
                const response = await axios.post(API_URLS.signup,{
                  username,
                  password,
                  firstName,
                  lastName
                })
                
                if (response.data.token){
                  const authToken = response.data.token;
                  const token = `Bearer ${authToken}`
                  localStorage.setItem("token" , token);
                  toast.success('Signup Successfully!');
                  navigate("/dashboard");
                }
              } catch (error) {
                console.log(error.message)
                const message = error?.response?.data?.message || '';
                console.log(message)
                if (message === 'user already exist!'){
                  toast.error('User already exist!');
                }
                else {
                  toast.error(error.message);
                }
              } finally{
                setUsername('');
                setPassword('');
                setFirstName('');
                setLastName('');
>>>>>>> Stashed changes
              }
            }} label={"Sign up"} />
            <BottomWarning label={"Already have an account"} to={"/signin"} buttonText={"Sign in"}/>
        </div>
      </div>
    </div>
  )
}