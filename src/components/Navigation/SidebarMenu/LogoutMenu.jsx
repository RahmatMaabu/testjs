import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiExit } from 'react-icons/bi';

const LogoutMenu = () => {
  const router = useRouter();
  const Logout = async () => {
   try {
    await axios.delete(`${process.env.NEXT_PUBLIC_ENDPOINT}/logout`, {
     withCredentials: true,});
   router.push('/');
   } catch (error) {
    console.error("Logout error:", error);
   }
  }
  return (
    <div className="flex items-center px-4 py-3 bg-zinc-900">
    <button onClick={Logout} className="flex items-center justify-center gap-4 text-gray-300  hover:text-zinc-700">
    <BiExit size={25} />
    <h2 className="text-sm">Logout</h2>
    </button>
  </div>
  )
}

export default LogoutMenu
