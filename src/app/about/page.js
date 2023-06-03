import React from "react";
import Herosection from "@/app/components/Herosection";

const About = () => {
  return (
    <div>
      <Herosection
        title={"This is about"}
        para={"this is a new paragraph from about"}
        imageUrl={"/rainy.png"}
      />
    </div>
  );
};

export default About;
