import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";


const Signup = () => {
  const[name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {

    if(!name || !email || !password){
      alert("Please fill all the fields")
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {displayName : name})
      alert("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
  <div className="flex items-center justify-center min-h-screen w-screen ">
    <div className="flex flex-col items-center h-100 w-80 bg-[#1a1a1a] shadow-lg rounded-2xl text-white">
      <h1
      className="mt-5 text-3xl underline "
      >Sign Up</h1>

       <div
       className="flex flex-col items-center
       justify-between -mt-1"
       >
        <div className="flex items-center mb-3 w-64 border rounded-xl bg-gray-300 p-2 mt-13 focus-within:ring-2 focus-within:ring-purple-300">
        <FaUser className="text-gray-600 mr-2" />
        <input
          type="text"
          placeholder="Full Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent outline-none w-full text-black placeholder-gray-600"
        />
      </div>

       <div className="flex items-center mb-3 w-64 border rounded-xl bg-gray-300 p-2 mt-3 focus-within:ring-2 focus-within:ring-purple-300">
        <FaEnvelope className="text-gray-600 mr-2" />
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent outline-none w-full text-black placeholder-gray-600"
        />
      </div>

      {/* Password Input */}
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
        onClick={handleSignup}
        className="bg-blue-500
          mt-5 text-sm w-30 h-10
        text-white px-4 py-2 rounded hover:cursor-pointer "

      >
        Sign Up
      </button>
       </div>

       <div className="mt-4 text-sm text-white ">
        Already have an account?{" "}
           <Link to="/login" className="text-blue-500 underline">
           Log in
       </Link>
          </div>
       </div>


  </div>
);

};

export default Signup;
