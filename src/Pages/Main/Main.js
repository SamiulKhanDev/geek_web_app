import React, { useState } from "react";
import Main1 from "../Main1/Main1";
import Main2 from "../Main2/Main2";

const Main = () => {
  const [isMain1, setIsMain1] = useState(true);
  return (
    <div>
      <button onClick={() => setIsMain1(!isMain1)}>Click</button>
      {isMain1 && <Main1 />}
      {!isMain1 && <Main2 />}
    </div>
  );
};

export default Main;
/**
 1) isMain1 = true
 {isMain1 && <Main1 />} = { T } !T = F, !F = T
  {!isMain1 && <Main2 />}
 2) isMain1 = false;
 {isMain1 && <Main1 />} = { F } !T = F, !F = T
  {!isMain1 && <Main2 />} = {T }
 */
