import { UserProfile } from "./UserProfile";
import { Button } from "./Button"

const users = [{
  firstName: "Lakshya",
  lastName: "Tiwari",
  _id: "1"
},{
  firstName: "Rahul",
  lastName: "Mishra",
  _id: "2"
},{
  firstName: "John",
  lastName: "Doe",
  _id: "3"
},{
  firstName: "Kshitij",
  lastName: "Tiwari",
  _id: "4"
}];

export function Users(){
  return (
    <>
      <div className="font-semibold px-5 mt-4">
        Users
      </div>
      <div className="px-5 mt-1">
        <input type="text" className="border-2 w-full mt-1 shadow-sm rounded-lg p-2 border-slate-300 bg-slate-50" placeholder="Search Users..."/>
      </div>
      <div>
        {users.map((user)=>{
          return <User user={user}/>
        })}
      </div>
    </>
  )
}

function User({user}){

  return (
    <div className="flex m-5 justify-between">
      <div className="flex items-center">
        <UserProfile letter={user.firstName[0]} />
        <div className="m-4">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div className="mr-5">
        <Button label={"Send Money"}/>
      </div>
    </div>
  )
}