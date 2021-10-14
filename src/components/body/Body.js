import React from "react";
import Input from "../body/input/Input";
import Hero from "../body/hero/Hero";
import "../../sass/components/Body.scss";

function Body() {
  return (
    <div className="body">
      <div>
        <Input />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default Body;
