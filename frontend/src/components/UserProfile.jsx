
export function UserProfile({letter}){
  return (
    <div className={"rounded-full h-12 w-12 bg-slate-200 flex justify-center"}>
      <div className="flex items-center font-medium">
        {letter}
      </div>
    </div>
  )
}