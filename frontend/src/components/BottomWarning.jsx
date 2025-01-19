import { Link } from "react-router";

export function BottomWarning({label, to , buttonText}){
  return (<div className="flex justify-center text-sm">
    <div>{label}</div>
    <Link className="underline pl-1 cursor-pointer" to={to}>{buttonText}</Link>
  </div>)
} 