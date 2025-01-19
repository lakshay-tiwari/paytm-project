
export function UserProfile({letter,colour}){
  return (
    <div className={`rounded-full h-12 w-12 ${colour} flex justify-center`}>
      <div className="flex items-center font-medium">
        {letter}
      </div>
    </div>
  )
}