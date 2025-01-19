import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = ()=>{
  console.log('hi there')
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
