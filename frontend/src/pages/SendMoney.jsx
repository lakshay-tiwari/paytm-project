
export const SendMoney = ()=>{
  return (
    <div className="bg-slate-200 h-screen flex justify-center">
      <div className="flex items-center">
        <div className="bg-white w-80 rounded-lg h-max text-center px-4">
          <div className="font-bold text-2xl m-5">Send Money</div>
          <div className="flex">
            <UserLogo letter={"L"}/>
            <div className="flex items-center ml-3 font-semibold text-lg">Friend's Name</div>
          </div>
          <div className="text-start mt-2">
            <div>
              Amounts in Rs
            </div>
            <div className="mt-2 mb-10">
              <input type="text" className="border-2 w-full rounded-lg p-2" placeholder="Enter Amount"/>
              <button className="w-full bg-green-500 text-white focus:outline-none focus:ring-4 focus:ring-green-400 rounded-lg h-8 mt-4 hover:bg-green-400">Initiate Transfer</button>
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