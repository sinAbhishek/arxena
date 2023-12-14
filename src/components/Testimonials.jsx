import React from "react";

const Testimonials = () => {
  return (
    <div className="  h-max w-full">
      <div className=" flex justify-center mt-20 ">
        <img
          style={{ width: "150px", height: "150px" }}
          className=" rounded-full"
          src="./dp.webp"
          alt=""
        />
      </div>
      <div className=" mx-4">
        <div className=" flex justify-start">
          <img className=" w-10 h-8" src="./quote.png" alt="" />
        </div>
        <p className=" italic text-slate-800 mt-4">
          Arxena helps me map with large F100 accounts saving me hours of manual
          work for resourcing projects.
        </p>
        <p className=" font-medium text-lg mt-12 text-slate-800">
          Mannan Pacha{" "}
          <span className=" text-lg font-normal">
            {" "}
            | Manager - Ernst & Young
          </span>
        </p>
        <img className=" h-12 w-12" src="./ln.png" alt="" />
        <div className=" flex justify-end mr-12 mt-2">
          <img className=" w-10 h-8" src="./quote1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
