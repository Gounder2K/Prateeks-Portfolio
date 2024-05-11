import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://www.etap.co.nz/index.php"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="ETAP Project"
                className="rounded-lg"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">ETAP</p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 15 screens,
                  along with the integration of a blog using PHP.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1] rounded-lg"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Tic-Tac-Toe</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a web application on JS that allows users to play a
                  simple game of tic-tac-toe.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
