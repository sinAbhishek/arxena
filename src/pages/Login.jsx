import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./signup.css";
import Testimonials from "../components/Testimonials";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [fill, setfill] = useState(true);
  const [valid, setvalid] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.email.length !== 0 && state.password.length !== 0) {
      setvalid(true);
      setfill(true);
    } else {
      setfill(false);
      setvalid(false);
    }
  };
  const change = (e) => {
    setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <div className=" flex justify-between h-screen">
      <div
        style={{ width: "70%" }}
        className=" h-full flex flex-col items-center"
      >
        <div className=" h-20  relative w-full">
          <img
            className=" w-40 absolute bottom-0 ml-4"
            src="./arxena-logo.png"
            alt=""
          />
        </div>
        <div
          style={{ height: "calc(100% - 80px" }}
          className=" flex items-start"
        >
          <div
            style={{
              minHeight: "60%",
              height: "maximum-content",
              width: "500px",
              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            className=" mt-12 pb-4"
          >
            <form
              className=" flex flex-col items-center w-full"
              action=""
              onSubmit={onSubmit}
            >
              <p className=" mt-8 text-xl font-light">Welcome back!</p>

              <input
                className=" w-9/12 px-4 py-2 my-4 border border-slate-300"
                type="text"
                placeholder="Email"
                onChange={change}
                id="email"
              />
              <input
                className=" w-9/12 px-4 py-2 my-4 border border-slate-300"
                type="text"
                placeholder="Password"
                id="password"
                onChange={change}
              />

              <button
                style={{ backgroundColor: "#2474cc" }}
                className=" w-max h-12 rounded-full text-lg  font-medium border text-center  px-16 mb-4 text-white mt-6 "
                type="submit"
              >
                Log in
              </button>
              {!fill && (
                <p className=" text-red-500 text-sm mt-4">
                  Please fill in all the fields :-)
                </p>
              )}
              {valid && (
                <p className=" text-red-500 text-sm mt-4">
                  Invalid email or password
                </p>
              )}
              <p className=" text-slate-300">
                Forgot your password?{" "}
                <span className=" underline">Reset it here</span>
              </p>
              <p className=" text-slate-300">
                Need an account?{" "}
                <NavLink to={"/signup"}>
                  <span className=" underline">Sign up for free</span>
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: "30%" }} className="h-full tst ">
        <Testimonials />
      </div>
    </div>
  );
};

export default Login;
