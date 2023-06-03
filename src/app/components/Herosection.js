import React from "react";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({ title, para, imageUrl }) => {
  return (
    <div className="container">
      <div className="col">
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
      <div className="col">
        <Image src={imageUrl} alt="first image" width={300} height={300} />
      </div>
    </div>
  );
};

export default Herosection;
