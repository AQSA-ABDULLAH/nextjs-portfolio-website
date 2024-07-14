import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center m-8 mx-40">
      <h1 className="bg-yellowCustom px-5 py-2 rounded-lg mb-6 text-3xl font-medium text-center">
        Hey, I'm John
      </h1>
      <h1 className="text-3xl font-medium mb-6 text-center">
        a web developer with
      </h1>
      <p className="mx-12 mb-8 text-lg text-center">
        Passionate about web development, John crafts engaging websites, merges technology,
        and delivers robust, scalable solutions, ensuring client satisfaction and continuous growth.
      </p>
    </div>
  );
};

export default Hero;


