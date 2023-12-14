import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./signup.css";
import Testimonials from "../components/Testimonials";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [fill, setfill] = useState(true);
  const [state, setState] = useState({
    phone: "98",
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      state.name.length !== 0 &&
      state.email.length !== 0 &&
      state.password.length !== 0
    ) {
      navigate("/");
    } else {
      setfill(false);
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
              height: "99%",
              width: "500px",
              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            className=""
          >
            <form
              className=" flex flex-col items-center w-full"
              action=""
              onSubmit={onSubmit}
            >
              <p className=" mt-8 text-xl font-light">
                Get started with 10 free org-chart credits.
              </p>
              <p className=" text-xl font-light">No credit card is needed.</p>
              <input
                className=" w-9/12 px-4 py-1 my-4 border border-slate-300"
                type="text"
                placeholder="Full Name"
                id="name"
                onChange={change}
              />
              <PhoneInput
                country={"us"}
                value={state.phone}
                onChange={(phone) => setState({ phone })}
              />
              <input
                className=" w-9/12 px-4 py-1 my-4 border border-slate-300"
                type="text"
                placeholder="Buisness Email"
                onChange={change}
                id="email"
              />
              <input
                className=" w-9/12 px-4 py-1 my-4 border border-slate-300"
                type="text"
                placeholder="Password"
                id="password"
                onChange={change}
              />
              <button className=" my-4 w-9/12 border border-slate-300 h-8 font-normal text-sm text-slate-700">
                I work for a
              </button>
              <button
                type="submit"
                style={{ backgroundColor: "#2474cc" }}
                className=" w-max h-12 rounded-full text-lg  font-medium border text-center px-8 mb-4 text-white"
              >
                Create account
              </button>
              {!fill && (
                <p className=" text-red-500 text-sm mt-4">
                  Please fill in all the fields :-)
                </p>
              )}
              <p className=" text-slate-400">
                Already registered?{" "}
                <NavLink to={"/login"}>
                  <span className=" underline">Log in instead</span>
                </NavLink>
              </p>
              <p className=" text-slate-400 text-center my-4">
                Account lock: We discourage licence sharing. Your account will
                be accessible from this device only
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

export default Signup;
