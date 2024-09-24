
import Login from "@/components/FormLogin/Login";
import SessionUsers from "@/libs/SessionUsers";
import { redirect } from "next/navigation";

export default async function Home() {
  

 
  
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-100">
      <Login />
    </div>
  );
}


