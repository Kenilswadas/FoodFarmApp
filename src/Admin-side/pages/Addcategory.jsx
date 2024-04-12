import React, { useState } from "react";
import VerticalNavbar from "../Componenets/helpingpage/VerticalNavbar.jsx";
import { Button } from "../../helpers/Button.jsx";
import CategoryForm from "../Componenets/Form/CategoryForm.jsx";
function Addcategory() {
  const [view, setView] = useState(false);
  const handleOpenModel = () => {
    setView(!view);
  };
  return (
    <div className="h-screen bg-[#ebf1f1]">
      <VerticalNavbar />
      <div className="flex items-center justify-center w-full">
        <Button btnName={"Add Category"} clickHandler={handleOpenModel} />
      </div>
      {view ? <CategoryForm setView={setView} view={view} /> : null}
    </div>
  );
}

export default Addcategory;
