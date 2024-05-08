import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">eTAP /</span> Software Engineer
          </p>
          <p className="text-gray-300">AUG 2022 - PRESENT, AUCKLAND</p>
        </div>
        <p className="text-gray-300 pt-5">
          Currently, I am employed at eTAP, a cloud-based solution for schools
          to manage student reports. eTAP is currently utilized in over 100
          schools nationwide by thousands of teachers for report management.
          With 1.5 years of experience as a PHP developer, I have built a strong
          foundation in creating dynamic and responsive mobile and web
          applications.
          <br />
          <br />
          My expertise in PHP and Python has been instrumental in crafting
          dynamic web solutions that drive efficiency and user satisfaction.
          Leveraging PHP, CSS, and HTML, I've developed responsive reports that
          deliver actionable insights with clarity and precision. Additionally,
          I've engineered a custom web application utilizing PHP and SQL,
          facilitating seamless storage and retrieval of student results.
          <br />
          <br />
          Continuously innovating, I've responded to educators' needs by
          implementing tailored features to optimize their workflow and enhance
          productivity. My commitment to staying updated with the latest web
          development trends ensures that I deliver solutions that are not only
          functional but also future-proof.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            PHP
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Python
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            MySQL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
