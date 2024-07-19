import React from "react";
import FunComp1 from "./FunComp1";
import FunComp2 from "./FunComp2";
 import { useState } from "react";
import "../App.css"

const ToggleFunc = () => {
  const [funcOne, setfunOne] = useState(false);
//   console.log(funcOne)
  const [funcTwo, setfunTwo] = useState(false);

  return (
    <div>
      <button onClick={()=>setfunOne(!funcOne)}>First Functional component</button>
      <button onClick={()=>setfunTwo(!funcTwo)}>Second Functional component</button>
    
    <div className="container">
      {funcOne ?  <FunComp1/> : null}
      {funcTwo ?  <FunComp2/> : null}
    </div>
    </div>
  );
};

export default ToggleFunc;