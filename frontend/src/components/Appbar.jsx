import { useNavigate } from "react-router"
import LogoutSvg from "./../assets/logout.svg"

export function Appbar({letter}){
  const navigate = useNavigate();

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col items-center justify-center h-full ml-5 font-semibold text-xl">
        PayTM App
      </div>
      <div className="flex mr-3 sm:mr-6">
        <div className="flex flex-col justify-center h-full sm:mr-4 mr-2 text-slate-900 text-lg">
          Hello
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-full flex justify-center bg-slate-200 h-12 w-12 sm:mr-4 mr-2">
            <div className="h-full flex flex-col justify-center">
              {letter}
            </div>
          </div>
        </div> 
        <div className="flex justify-center">
          <div className="flex items-center">
            <Logout navigate={navigate}/>
          </div>
        </div>   
      </div>
    </div>
  )
}


function Logout({navigate}){

  return (
    <div>
      <img onClick={()=>{
        localStorage.removeItem("token");
        navigate('/signin');
      }} src={LogoutSvg} height={25} width={25} className="cursor-pointer"/>
    </div>
  )
}