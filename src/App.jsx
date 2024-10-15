import React from "react";
import "./App.css";
import RegForm from "./components/RegForm";

function App() {
  return (
    <>
      <div className="main h-screen">
        <h1 className="heading lg:text-[40px] lg:text-center text-[18px]  text-white  sticky top-0 z-50 ">
          Patient Registeration Form
        </h1>
        <RegForm />
      </div>
    </>
  );
}

export default App;
