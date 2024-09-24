"use client";
import SessionUsers from '@/libs/SessionUsers';
import Image from 'next/image';
import React, { useState } from 'react';
import useCheckSession from '../useCheckSession';
import { handleLogin } from '@/libs/loginHandler'; // Import the login handler function
import { useRouter } from 'next/navigation'; // Import useRouter here

const Login = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Move useRouter here

  useCheckSession();

  const handleSubmit = (e) => {
    handleLogin(e, username, password, setMessage, router); // Pass router as an argument
  };

  return (
    <div className="bg-white shadow-2xl rounded-xl flex flex-col items-center justify-center gap-4 lg:w-1/3 sm:w-1/2 w-full sm:h-auto h-80 py-4 px-5">
      <div className="flex flex-col items-center gap-2">
        <Image src={"/image/LogoUmum.png"} alt="logo" width={80} height={80} priority />
        <h2 className="font-medium">SMA NEGERI 1 GORONTALO</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full h-full">
        <div className="flex flex-col gap-2 w-full h-full">
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='Masukkan Username' 
            className="px-4 text-sm text-neutral-600 py-2 border-2 rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="flex flex-col gap-2 w-full h-full">
          <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder='Masukkan Password' 
            className="px-4 text-neutral-600 text-sm py-2 border-2 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button 
          type="submit" 
          className={`bg-blue-600 text-white text-sm font-semibold px-4 py-3 rounded-lg w-full ${!username || !password ? 'opacity-50 cursor-not-allowed' : ''}`} 
          disabled={!username || !password} 
        >
          Login
        </button>
      </form>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default Login;
