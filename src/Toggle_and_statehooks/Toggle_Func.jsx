import React from "react";
import FunCompOne from "./FunCompOne";
import FunCompTwo from "./FunCompTwo";
 import { useState } from "react";
import "../App.css"

const Toggle_Func = () => {
  const [funcOne, setfunOne] = useState(false);
//   console.log(funcOne)
  const [funcTwo, setfunTwo] = useState(false);

  return (
    <div>
      <button onClick={()=>setfunOne(!funcOne)}>First Functional component</button>
      <button onClick={()=>setfunTwo(!funcTwo)}>Second Functional component</button>
    
    <div className="container">
      {funcOne ?  <FunCompOne/> : null}
      {funcTwo ?  <FunCompTwo/> : null}
    </div>
    </div>
  );
};

export default Toggle_Func;