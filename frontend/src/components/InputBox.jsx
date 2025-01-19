export function InputBox({label,placeholder,onChange}){
  return (<div>
    <div className="text-left font-semibold text-base text-slate-700" >{label}</div>
    <input type="text" onChange={onChange} className="border-2 w-full rounded-lg px-2 shadow-sm my-1 border-slate-200" placeholder={placeholder}/>
  </div>)
}