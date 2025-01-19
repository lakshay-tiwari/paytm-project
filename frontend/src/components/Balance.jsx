export function Balance({amount}){
  amount = 1000;
  return (
    <div className="flex pl-4 mt-5">
      <div className="font-bold text-lg">
        Your balance
      </div>
      <div className="font-semibold text-lg ml-4">
        Rs {amount}
      </div>
    </div>
  )
}