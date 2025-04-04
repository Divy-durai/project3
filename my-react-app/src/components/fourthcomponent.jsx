
import React from "react";
import Fifthcomponent from "./fifthcomponent"; // Updated import

function Fourthcomponent({ message }) {
  return (
    <div>
      <h1>This is the Fourth Component</h1>
      <Fifthcomponent message={message} />
    </div>
  );
}

export default Fourthcomponent;
