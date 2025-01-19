
export function Appbar({letter}){
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col items-center justify-center h-full ml-5 font-semibold text-xl">
        PayTM App
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4 text-slate-900 text-lg">
          Hello
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-full flex justify-center bg-slate-200 h-12 w-12 mr-4">
            <div className="h-full flex flex-col justify-center">
              {letter}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

