
import React from "react";
import Thirdcomponent from "./thirdcomponent"; // Updated import

function Secondcomponent({ message }) {
  return (
    <div>
      <h1>This is the Second Component</h1>
      <Thirdcomponent message={message} />
    </div>
  );
}
export default Secondcomponent;
