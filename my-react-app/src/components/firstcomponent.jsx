import React from "react";
import Secondcomponent from "./firstcomponent"; // Updated import

function Firstcomponent({ message }) {
  return (
    <div>
      <h1>This is the First Component</h1>
      <Secondcomponent message={message} />
    </div>
  );
}

export default Firstcomponent;
