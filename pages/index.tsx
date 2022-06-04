import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col p-5 items-center">
          <div className=" relative w-48 h-48 border-2">
            <Image
              src="/images/Profile.jpg"
              className="object-cover"
              layout="fill"
              alt="Profile"
            />
          </div>
            <div className="text-center">
              <h1 className="text-2xl my-3">Tanatorn Intaphong</h1>
              <h2 className="text-xl ">Front-end Developer</h2>
            </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default Home;
