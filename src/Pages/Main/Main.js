import React, { useState } from "react";
import Main1 from "../Main1/Main1";
import Main2 from "../Main2/Main2";

const Main = () => {
  const [isMain1, setIsMain1] = useState(true);
  return (
    <div>
      <button onClick={() => setIsMain1(!isMain1)}>Click</button>

      {/* {isMain1 ? <Main1 /> : <Main2 />} */}
      {isMain1 && <Main1 />}
      {!isMain1 && <Main2 />}
    </div>
  );
};

export default Main;
