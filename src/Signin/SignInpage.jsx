import React, { useState } from "react";
import signinimage from "../helpers/Images/signinimage.jpg";
import backimage from "../helpers/Images/johann-siemens-EPy0gBJzzZU-unsplash.jpg";
import { BgImage } from "../helpers/Backgroundimage";
import { Inputfield } from "../helpers/InputField";
import { Button, SignInButton } from "../helpers/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";
import { Form, Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../Firebaseconfig";
import { handleSigninwithGoogle } from "../helpers/SignInwith";
import Loader from "../helpers/Loader";
function SignInpage({ setIsloading, isLoading }) {
  const [isclicked, setIsclicked] = useState(false);
  const handleSignin = (values) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        toast.success("Sign In successfully");
        setIsclicked(false);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
        setIsclicked(false);
        toast.error(err.message);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <ToastContainer />
      {isLoading ? <Loader /> : null}
      <BgImage backgroundImage={backimage} />
      <div className="bg-white flex relative rounded-3xl shadow-2xl max-sm:shadow-none 2xl:w-3/5 2xl:h-auto xl:h-auto xl:w-3/5 md:w-3/4 sm:w-4/5 max-sm:w-3/4 ">
        <div className="w-3/4 flex max-sm:hidden ml-8 mt-8 mb-8">
          <img
            src={signinimage}
            alt=""
            className="w-full rounded-tl-3xl rounded-3xl rounded-bl-3xl  "
          />
        </div>
        <div className=" sm:w-5/6 max-sm:w-full flex items-start justify-center rounded-3xl m-8">
          <div className=" w-4/5 text-center flex flex-col mt-5 ">
            <h1 className="font-bold text-[#2C7865] text-4xl p-2 ">Sign In</h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("* required"),
                password: Yup.string()
                  .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                    "must conatains upper case ,lower case , one special character and one digit"
                  )
                  .required("* required"),
              })}
              onSubmit={(values, actions) => {
                setIsclicked(true);
                actions.setSubmitting(false);
                handleSignin(values);
              }}
            >
              {(values) => (
                <Form className="w-full text-left">
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
                  <div className="flex items-center justify-center">
                    <SignInButton
                      disable={isclicked ? true : false}
                      btnName={"Sign in"}
                      type={"submit"}
                      formik={values}
                    />
                  </div>
                </Form>
              )}
            </Formik>
            <p className="text-[#2C7865] mt-2">---- Login with ----</p>
            <div className="flex items-center justify-center">
              <SignInButton
                btnName={"Sign In With Google"}
                clickHandler={handleSigninwithGoogle}
                faicon={<FaGoogle />}
              />
            </div>
            <p className="text-[#90D26D] text-xl max-sm:mb-4 sm:mb-4 md:mb-4 sm:mt-5 ">
              {"New to this Site : "}
              <Link className="underline text-[#2C7865]" to={"/Signuppage"}>
                {"Sign Up"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInpage;
