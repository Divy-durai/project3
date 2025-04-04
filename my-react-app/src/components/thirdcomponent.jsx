
import React from "react";
import Fourthcomponent from "./fourthcomponent"; // Updated import

function Thirdcomponent({ message }) {
  return (
    <div>
      <h1>This is the Third Component</h1>
      <Fourthcomponent message={message} />
    </div>
  );
}

export default Thirdcomponent;
