// import React from 'react'
import Imageset from "../assets/image/shareImage";

const Main = () => {
  return (
    <div className="flex md:flex-row flex-col md:h-[82h] h-auto justify-center items-center gap-24">
      <div className="flex flex-col h-3/5 md:w-[550px] sm:w-full">
        <div className="flex mt-28 sm:justify-center md:justify-start sm:w-full">
          <p className="md:text-7xl sm:text-5xl md:font-semibold sm:font-medium">
            Make remote work
          </p>
        </div>
        <div className="flex mt-16 md:max-w-96 md:justify-start sm:justify-center ">
          <p className="leading-8 tracking-wider">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <div className="flex mt-16 sm:justify-center md:justify-start">
          <button className="rounded-xl bg-black text-white p-2 px-5">
            Learn More
          </button>
        </div>
        <div className="flex flex-row justify-between mt-20  ">
          <img src={Imageset.AudioPhile} alt="Logo" />
          <img src={Imageset.DataBiz} alt="Logo" />
          <img src={Imageset.Maker} alt="Logo" />
          <img src={Imageset.Meet} alt="Logo" />
        </div>
      </div>
      <div className="flex md:w-[500px] w-full">
        <img
          src={Imageset.Desktop}
          alt="Logo"
          className="h-[600px] md:w-[500px] w-full"
        />
      </div>
    </div>
  );
};

export default Main;
