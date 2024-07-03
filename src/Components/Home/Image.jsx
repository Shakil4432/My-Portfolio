import React from "react";
import profile from "../../../public/Profile.jpg";
const Image = () => {
  return (
    <div className="text-center mt-6">
      <img
        src={profile}
        alt="MD Shakil Hossain"
        className="rounded-full h-72 w-72 object-cover mx-auto"
      />
    </div>
  );
};

export default Image;
