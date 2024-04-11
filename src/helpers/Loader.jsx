import React from "react";
import "../helpers/Loader.css";
function Loader() {
  return (
    <div className="fixed inset-0 bg-cover bg-center flex items-center justify-center  bg-black bg-opacity-50 z-50">
      {" "}
      <div className="loader">
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
        <div className="loader_item"></div>
      </div>
    </div>
  );
}

export default Loader;
