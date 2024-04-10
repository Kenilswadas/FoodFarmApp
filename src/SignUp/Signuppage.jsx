import React from "react";
import signinimage from "./Images/signinimage.jpg";
import { BgImage } from "../helpers/Backgroundimage";
import { Inputfield } from "../helpers/InputField";
import { Button } from "../helpers/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Field, Form, Formik, FormikProps } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebaseconfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signuppage() {
  const handleCreateUser = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        console.log(res);
        toast.success("Sign Up successfully .");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <ToastContainer />
      <BgImage backgroundImage={signinimage} />
      <div className=" flex relative rounded-2xl  shadow-2xl max-sm:shadow-none 2xl:w-3/5 2xl:h-auto xl:h-auto xl:w-3/5 md:w-3/4 sm:w-4/5 max-sm:w-3/4 ">
        <div className="w-4/6 flex max-sm:hidden">
          <img
            src={signinimage}
            alt=""
            className="w-full rounded-tl-3xl rounded-bl-3xl "
          />
        </div>
        <div className="bg-white shadow-2xl sm:w-3/5 max-sm:w-full flex items-start justify-center text-left rounded-3xl m-8">
          <div className=" w-4/5 text-center flex flex-col mt-5 ">
            <h1 className="text-3xl font-bold text-[#2C7865] p-2 ">Sign Up</h1>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmpassword: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(15, "Must be 15 characters or less")
                  .required("required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("required"),
                password: Yup.string()
                  .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                    "must conatains upper case ,lower case , one special character and one digit"
                  )
                  .required("required"),
                confirmpassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "password must match")
                  .required("required"),
              })}
              onSubmit={(values, actions) => {
                alert(JSON.stringify(values, null, 2));
                // actions.setSubmitting(false);
                handleCreateUser(values);
              }}
            >
              {(values) => (
                <Form className="w-full text-left">
                  <Inputfield
                    fieldName={"name"}
                    fieldtype={"text"}
                    label={"name"}
                    placeholder={"name"}
                    formik={values}
                  />
                  <Inputfield
                    fieldName={"email"}
                    fieldtype={"email"}
                    label={"email"}
                    placeholder={"email"}
                    formik={values}
                  />
                  <Inputfield
                    fieldName={"password"}
                    fieldtype={"password"}
                    label={"password"}
                    placeholder={"password"}
                    formik={values}
                  />
                  <Inputfield
                    fieldName={"confirmpassword"}
                    fieldtype={"password"}
                    label={"confirmpassword"}
                    placeholder={"confirmpassword"}
                    formik={values}
                  />
                  <Button
                    btnName={"Sign in"}
                    formik={values}
                    type={"submit"}
                    // clickHandler={formik.handleSubmit}
                  />
                </Form>
              )}
            </Formik>
            <p className="text-[#2C7865] mt-5">---- Login with ----</p>
            <div className="flex justify-between text-center p-4 ">
              <FaGoogle className="text-[#2C7865]" size={20} />
              <FaFacebook className="text-[#2C7865]" size={20} />
              <FaTwitter className="text-[#2C7865]" size={20} />
            </div>
            <p className="text-[#90D26D] max-sm:mb-4 sm:mb-4 md:mb-4">
              {"New to this Site : "}
              <Link className="underline text-[#2C7865]" to={"/SignInpage"}>
                {"Sign in"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
