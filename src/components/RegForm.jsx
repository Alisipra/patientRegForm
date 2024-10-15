import React, { useState } from "react";

export default function RegForm() {
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    cnic: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    emergencyNo: "",
    currentAddress: "",
    permanentAddress: "",
    mob1: "",
    mob2: "",
    relationMob1: "",
    relationMob2: "",
  });
  let name, value;
  const postPatientData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      cnic,
      dob,
      gender,
      phone,
      email,
      emergencyNo,
      currentAddress,
      permanentAddress,
      mob1,
      mob2,
      relationMob1,
      relationMob2,
    } = patientData;

    const res = await fetch(
      "https://patientregdb-default-rtdb.firebaseio.com/patientDataRecorts.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          firstName,
          lastName,
          cnic,
          dob,
          gender,
          phone,
          email,
          emergencyNo,
          currentAddress,
          permanentAddress,
          mob1,
          mob2,
          relationMob1,
          relationMob2,
        }),
      }
    );
    if (res) {
      setPatientData({
        firstName: "",
        lastName: "",
        cnic: "",
        dob: "",
        gender: "",
        phone: "",
        email: "",
        emergencyNo: "",
        currentAddress: "",
        permanentAddress: "",
        mob1: "",
        mob2: "",
        relationMob1: "",
        relationMob2: "",
      });
      alert("Patient Data is saved Successfully...");
    } else {
      alert("Please fill all the fields...");
    }
  };
  return (
    <>
      <div className="container form   ">
        <form method="POST">
          <div className="Personal  lg:grid lg:grid-cols-3 lg:mx-10  grid grid-cols-1 ">
            <div className="p-4 w-[100%]">
              <label className="font-bold text-white lg:inline-block block">
                First Name:
              </label>
              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="First Name "
                name="firstName"
                value={patientData.firstName}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white lg:inline-block block">
                Last Name:
              </label>
              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="Last Name "
                name="lastName"
                value={patientData.lastName}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white  lg:inline-block block ">
                CNIC#:
              </label>
              <br />

              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="CNIC No "
                name="cnic"
                value={patientData.cnic}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%] text-black">
              <label className="font-bold  text-white  lg:inline-block block">
                DOB:
              </label>
              <br />
              <input
                type="date"
                className="p-2 rounded placeholder-black lg:w-[250px] "
                name="dob"
                value={patientData.dob}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%] text-white">
              <label className="font-bold  lg:inline-block block">
                Gender:
              </label>
              <br />
              <label className="font-bold ">Male</label>
              <input
                type="radio"
                className="p-2 rounded placeholder-black m-2 "
                name="gender"
                value={patientData.gender}
                onChange={postPatientData}
              />
              <label className="font-bold ">Female</label>
              <input
                type="radio"
                className="p-2 rounded placeholder-black m-2  "
                name="gender"
                value={patientData.gender}
                onChange={postPatientData}
              />
              <label className="font-bold ">Other</label>
              <input
                type="radio"
                className="p-2 rounded placeholder-black m-2 "
                name="gender"
                value={patientData.gender}
                onChange={postPatientData}
              />
            </div>
          </div>
          {/* second section */}

          <div className="contact  lg:grid lg:grid-cols-3 grid grid-cols-1 lg:mx-10 ">
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white lg:inline-block block">
                Phone:
              </label>
              <br />
              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="Phone/Mobile number "
                name="phone"
                value={patientData.phone}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white lg:inline-block block">
                Email:
              </label>
              <br />
              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="Email Address "
                name="email"
                value={patientData.email}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white lg:inline-block block">
                Emergency No:
              </label>
              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="Emergency Number"
                name="emergencyNo"
                value={patientData.emergencyNo}
                onChange={postPatientData}
              />
            </div>
          </div>

          {/* third sections */}

          <div
            className="
          contact  lg:grid lg:grid-cols-3 grid grid-cols-1 lg:mx-10 "
          >
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white ">Current address:</label>
              <br />
              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="Current Address"
                name="currentAddress"
                value={patientData.currentAddress}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white">
                Permanent Address:
              </label>
              <br />
              <input
                type="text"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="Permanent Address "
                name="permanentAddress"
                value={patientData.permanentAddress}
                onChange={postPatientData}
              />
            </div>
          </div>
          <div className="contact  lg:grid lg:grid-cols-3 grid grid-cols-1 lg:mx-10">
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white">MOB 1:</label>
              <br />
              <input
                type="number"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="+923xxxxxxx"
                name="mob1"
                value={patientData.mob1}
                onChange={postPatientData}
              />
              <input
                type="text"
                className="m-1 p-2"
                placeholder="Relation"
                name="relationMob1"
                value={patientData.relationMob1}
                onChange={postPatientData}
              />
            </div>
            <div className="p-4 w-[100%]">
              <label className="font-bold  text-white">MOB 2:</label>
              <br />
              <input
                type="number"
                className="p-2 rounded placeholder-black lg:w-[250px] w-[310px]"
                placeholder="+923xxxxxxx"
                name="mob2"
                value={patientData.mob2}
                onChange={postPatientData}
              />
              <input
                type="text"
                className="m-1 p-2"
                placeholder="Relation"
                name="relationMob2"
                value={patientData.relationMob2}
                onChange={postPatientData}
              />
            </div>
          </div>
          {/* butoons code */}
          <div className="lg:text-center text-start ">
            <input
              type="submit"
              value="Submit"
              className="bg-[#00bca1] text-center p-4 w-[90px] rounded-xl btn m-2 mb-4 cursor-pointer"
              onClick={submitData}
            />
            <input
              type="Reset"
              value="Reset"
              className="bg-[#e0b245] text-center p-4 w-[90px] rounded-xl btn m-2 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </>
  );
}
