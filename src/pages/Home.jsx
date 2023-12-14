import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className=" flex justify-end py-6 pr-10 w-full">
        <button
          style={{ backgroundColor: "#2474cc" }}
          className=" w-36 h-12 rounded-full text-lg font-medium text-white text-center flex justify-center items-center"
        >
          <NavLink to={"/signup"}>Sign up</NavLink>
        </button>
        <button
          style={{ color: "#2474cc", borderColor: "#2474cc" }}
          className=" w-36 h-12 rounded-full text-lg  font-medium border text-center ml-6"
        >
          <NavLink to={"/login"}>Log in</NavLink>
        </button>
      </div>
      <div className=" w-full items-center flex flex-col mt-28">
        <div className=" ">
          <img className=" w-56" src="./arxena-logo.png" alt="" />
        </div>
        <div className=" w-2/5 relative h-max my-16">
          <input
            className=" w-full outline-none bg-slate-100 h-12 rounded-full px-8 text-sm "
            type="text"
            placeholder="🔍 Search any company's org chart"
          />
          <img
            className=" absolute right-6 w-6 h-6 bottom-2"
            src="./new_upload.png"
            alt=""
          />
        </div>
        <div className="">
          <img className=" w-52 h-6" src="./powered_by_gpt4.png" alt="" />
        </div>
      </div>
      <div className=" absolute bottom-0 flex justify-between w-full">
        <div className=" ml-12 mb-8">
          <div className="">
            <p>
              OrgGPT - Talent Identification Software for Ambitious Companies
            </p>
          </div>
          <div className="">
            <a className=" hover:underline text-sky-500 text-sm" href="pricing">
              Pricing
            </a>
            <span className=" mx-1">|</span>
            <a className=" hover:underline text-sky-500 text-sm" href="eula">
              Terms of Service
            </a>
            <span className=" mx-1">|</span>
            <a className=" hover:underline text-sky-500 text-sm" href="privacy">
              Privacy Policy
            </a>
            <span className=" mx-1">|</span>
            <a
              className=" hover:underline text-sky-500 text-sm"
              href="howToUse"
            >
              How to Use
            </a>
            <span className=" mx-1">|</span>
            <a
              className=" hover:underline text-sky-500 text-sm"
              href="downlaodExt"
            >
              Download Extension
            </a>
          </div>
        </div>
        <div className=" flex mr-24">
          <img className=" h-12 w-12 mx-2" src="./ln.png" alt="" />
          <img className=" h-12 w-12 mx-2" src="./tw.png" alt="" />
          <img className=" h-12 w-12 mx-2" src="./fb.png" alt="" />
          <img className=" h-12 w-12 mx-2" src="./yt.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
