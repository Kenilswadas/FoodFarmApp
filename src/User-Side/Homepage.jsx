import React from "react";
import Navbar from "../helpers/Navbar";
import Loader from "../helpers/Loader";
import { auth } from "../Firebaseconfig";

function Homepage({ UserName }) {
  return (
    <div className="h-screen bg-[#E1F0DA]">
      {auth?.currentUser === null ? <Loader /> : null}
      <Navbar UserName={UserName} />
    </div>
  );
}

export default Homepage;
