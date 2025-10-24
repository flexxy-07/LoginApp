import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LogIn = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async() => {
    if(!email || !password){
      alert('Please fill all the fields');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth , email, password);
      alert("Login successfull!");
      navigate("/dashboard");
    }catch(error){
      alert(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <div className="flex flex-col items-center min-h-100 w-80 bg-[#1a1a1a] shadow-lg rounded-2xl text-white">
        <h1 className="mt-5 text-3xl underline">Login</h1>

        <div className="flex flex-col items-center justify-between -mt-1">
          <div className="flex items-center mb-3 w-64 border rounded-xl bg-gray-300 p-2 mt-12 focus-within:ring-2 focus-within:ring-purple-300">
            <FaEnvelope className="text-gray-600 mr-2" />
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent outline-none w-full text-black placeholder-gray-600"
            />
          </div>

          <div className="flex items-center mb-3 w-64 border rounded-xl bg-gray-300 p-2 mt-3 focus-within:ring-2 focus-within:ring-purple-300">
            <FaLock className="text-gray-600 mr-2" />
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent outline-none w-full text-black placeholder-gray-600"
            />
          </div>

          <button
            onClick={handleLogin}
            className="bg-green-500 mt-8 w-32 h-10 text-white px-4 py-2 rounded hover:cursor-pointer text-center"
          >
            Login
          </button>

          <p className="mt-6 text-white">
            Don't have an account? <Link to="/" className="text-blue-500">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn