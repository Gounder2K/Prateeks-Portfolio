import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As a dedicated software engineer, I thrives in the intricate interplay
          between logic and creativity. Currently immersed in the dynamic field
          of algorithms optimisations, me expertise revolves around PHP,
          JavaScript, seamlessly merging technology with innovative solutions.
          <br />
          <br />
          My journey entails translating abstract concepts into functional code,
          sculpting intuitive solutions, and consistently pushing the envelope
          of innovation. My affinity for problem-solving extends beyond coding
          challenges to encompass mathematical complexities, driving my
          impactful contributions to the field.
        </p>
      </div>
    </section>
  );
};

export default About;
