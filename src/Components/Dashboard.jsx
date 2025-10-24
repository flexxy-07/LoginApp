import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();
  const[user, setUser] = useState(null);

  useEffect(() => {
    const unSub =auth.onAuthStateChanged((currUser) => {
      if(currUser){
        setUser(currUser);
      }else{
        navigate('/login');
      }
    })
    
    return () => unSub();
  },[navigate])

  const handleLogout = async() => {
    await auth.signOut();
    navigate('/login');
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.displayName || "User"}!
        <p
        className="text-sm text-center"
        >What are you upto ?</p>
      </h1>
      
      <p className="mb-6">Your email: {user?.email}</p>
      
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded text-white"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard