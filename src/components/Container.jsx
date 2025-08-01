import React from 'react';
import { useState } from 'react'

function Container(){
  const [ran,setRan] = useState(0);

  function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  let generateRandomNumber = () =>{
    setRan(getRandom(1000,9999));
  };

  return(
    <div className="container">
      <h2 className="title">Generator OTP</h2>
      <div className="num">{ran}</div>
      <button onClick={generateRandomNumber} >Generate btn</button>
    </div>
  )
}

export default Container;