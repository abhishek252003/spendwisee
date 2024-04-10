import { useEffect, useState } from "react"
import './App.css'
// import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
// import Buttons from "./Buttons";


const App=()=> {
 
  let heroData= [
    {text1: "Spend less than you earn", text2:"invest the rest."},
    {text1: "Save today for ",  text2: "A better tomorrow."},
    {text1: "Money saved is",  text2: "money earned."},
  ]
  const [heroCount, setHeroCount]= useState(0);
  const [playStatus, setPlayStatus]= useState(false);
useEffect(()=>{
  setInterval(()=>{
    setHeroCount((count)=>{return count===1?0:count})
  },3000);
},[])
const {user , loginWithRedirect, isAuthenticated, logout} =useAuth0();
console.log("User: ", user);


  return (
    <div>
    <Background playStatus={playStatus} heroCount={heroCount}/>
   
     <Navbar></Navbar>
 
 { isAuthenticated && <h3 className="wlcm">Welcome {user.name}</h3>}
  {
      isAuthenticated ?( <button className="btn" onClick={()=>logout()}>Logout</button>
      
      ):(
        <button className="btn" onClick={()=> loginWithRedirect()}>Login
      </button>
      )
     }

   
     
     
    <Hero
  setPlayStatus={setPlayStatus}
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus= {playStatus}
    />
      </div>
  )
}
export default App



