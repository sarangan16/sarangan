import React from "react";
import { FlipWords } from "./Flipword";

const Hero = () => {
  const words = ["Websites", "WebApps", "ApiCalls"];

  return (
    <div>
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          I Build
          <FlipWords words={words} /> <br />
          Projects
        </div>
      </div>
      );
    </div>
  );
};

export default Hero;
