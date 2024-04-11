import React from "react";
import Navbar from "../helpers/Navbar";
import Loader from "../helpers/Loader";
import { auth } from "../Firebaseconfig";

function Homepage({ UseName }) {
  console.log(auth?.currentUser);
  console.log(auth);
  return (
    <div>
      {auth?.currentUser === null ? <Loader /> : null}
      <Navbar UserName={UseName} />
    </div>
  );
}

export default Homepage;
