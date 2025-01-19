import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = ()=>{
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <div>
            <Heading label={"Signin"}/>
            <SubHeading label={"Enter your credentials to access your account"}/>
            <InputBox label={"Email"} placeholder={"johndoe@email.com"}/>
            <InputBox label={"Password"} placeholder={"123456"} />
          </div>
          <Button label={"Signin"}/>
          <BottomWarning label={"Don't have an account"} to={"/signup"} buttonText={"Signup"} />
        </div>
      </div>
    </div>
  )
}