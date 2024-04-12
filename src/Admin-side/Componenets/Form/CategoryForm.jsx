import React from "react";
import { Inputfield } from "../../../helpers/InputField.jsx";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "../../../helpers/Button.jsx";
import { IoIosCloseCircle } from "react-icons/io";

function CategoryForm({ setView, view }) {
  const handleClose = () => {
    setView(!view);
  };
  return (
    <div className="fixed flex items-center justify-center h-screen inset-0 bg-cover bg-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-5 w-96 rounded-xl">
        <Formik
          initialValues={{
            Category: "",
            Subcategory: "",
          }}
          validationSchema={Yup.object({
            Category: Yup.string().required("required"),
            Subcategory: Yup.string().required("required"),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
            // setView(!view);
          }}
        >
          {(values) => (
            <Form>
              <div className="flex justify-end">
                <IoIosCloseCircle
                  className="text-[#2C7865] text-3xl cursor-pointer"
                  onClick={() => handleClose()}
                />
              </div>
              <Inputfield
                fieldName={"Category"}
                fieldtype={"text"}
                label={"Category"}
                placeholder={"Category Name"}
                key={"Category"}
              />
              <Inputfield
                fieldName={"Subcategory"}
                fieldtype={"text"}
                label={"Subcategory"}
                placeholder={"Subcategory Name"}
                key={"Subcategory"}
              />
              <Button btnName={"Add"} type={"submit"} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CategoryForm;
