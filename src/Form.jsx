import React from "react";

export default function Form() {
  return (
    <>
      <div className="flex justify-center  ">
        <form className="form h-screen w-[100%] p-5">
          <h1 className="text-white text-[45px] font-bold">
            Personal Information
          </h1>
          <label className="text-white font-bold ">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black"
          />

          <label className="text-white font-bold ">Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black"
          />
          <br />
          <label className="text-white font-bold inline-block mx-6">DOB:</label>
          <input
            type="date"
            placeholder="Last Name"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black text-justify"
          />

          <label className="text-white font-bold inline-block mx-6">
            CNIC:
          </label>
          <input
            type="text"
            placeholder="Enter CNIC #"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black text-justify"
          />

          <label className="text-white font-bold inline-block mx-6 mt-2">
            Gender:
          </label>
          <label className="text-white mx-2 font-bold">Male</label>
          <input type="radio" className="text-white p-2 " name="input" />
          <label className="text-white mx-2 font-bold">Female</label>
          <input type="radio" className="text-white p-2 " name="input" />
          <label className="text-white mx-2 font-bold">Other</label>
          <input type="radio" className="text-white p-2 " name="input" />

          {/* second section started */}
          <h1 className="text-white text-[45px] font-bold mt-[50px]">
            Contact Information
          </h1>
          <label className="text-white font-bold inline-block ">Phone:</label>
          <input
            type="text"
            placeholder="Phone number"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black"
          />
          <label className="text-white font-bold inline-block">Email:</label>
          <input
            type="text"
            placeholder="Enter email address"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black"
          />
          <br />
          <label className="text-white font-bold inline-block">
            Emergency#:
          </label>
          <input
            type="text"
            placeholder="First Name"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black"
          />
          <label className="text-white font-bold ">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            className="text-black p-2 w-[37%] m-2 border-2 border-black  rounded-lg placeholder-black"
          />
        </form>
      </div>
    </>
  );
}
