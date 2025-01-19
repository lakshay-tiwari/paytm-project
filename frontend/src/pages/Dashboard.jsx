import { useEffect } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = ()=>{
  

  return (
    <div className="bg-slate-100 h-screen">
      <Appbar letter={"U"}/>
      <div>
        <Balance />
        <Users />
      </div>
    </div>
  )
}
