import React, { useState } from "react";
import signinimage from "../helpers/Images/signinimage.jpg";
import backimage from "../helpers/Images/johann-siemens-EPy0gBJzzZU-unsplash.jpg";
import { BgImage } from "../helpers/Backgroundimage";
import { Inputfield } from "../helpers/InputField";
import { Button } from "../helpers/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { FaGoogle } from "react-icons/fa";
import { Form, Formik } from "formik";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Firebaseconfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleSigninwithGoogle } from "../helpers/SignInwith";
import { addDoc, collection } from "firebase/firestore";
import Loader from "../helpers/Loader";
function Signuppage({ setIsloading, isLoading }) {
  const [isclicked, setIsclicked] = useState(false);
  const handleCreateUser = (values, resetForm) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        console.log(res);
        updateProfile(auth.currentUser, {
          displayName: values.name,
        });
        localStorage.setItem("UseName", values.name);
        toast.success("Sign Up successfully .");

        addusertoFirestore(values, resetForm);
        setIsloading(false);
        setIsclicked(false);
      })
      .catch((err) => {
        setIsloading(false);
        setIsclicked(false);
        console.log(err);
        toast.error(err.message);
      });
  };
  const addusertoFirestore = (values, resetForm) => {
    addDoc(collection(db, "UserDetails"), {
      Name: values.name,
      Email: values.email,
      Password: values.password,
      Uid: auth?.currentUser?.uid,
    })
      .then(() => {
        toast.success("Data added to firebase .");
        resetForm();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Opps ! error occurs ...");
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <ToastContainer />
      {isLoading ? <Loader /> : null}
      <BgImage backgroundImage={backimage} />
      <div className="bg-white flex relative  rounded-2xl shadow-2xl max-sm:shadow-none 2xl:w-3/5 2xl:h-auto xl:h-auto xl:w-3/5 md:w-3/4 sm:w-4/5 max-sm:w-3/4 ">
        <div className="w-4/6 flex max-sm:hidden m-8">
          <img src={signinimage} alt="" className="w-full rounded-2xl " />
        </div>
        <div className=" mr-8 mt-8 mb-8 rounded-2xl sm:w-3/5 max-sm:w-full flex items-start justify-center text-left">
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
                  .required("* required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("* required"),
                password: Yup.string()
                  .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                    "must conatains upper case ,lower case , one special character and one digit"
                  )
                  .required("* required"),
                confirmpassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "password must match")
                  .required("* required"),
              })}
              onSubmit={(values, { resetForm }) => {
                setIsclicked(true);
                handleCreateUser(values, resetForm);
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
                  <div className="flex items-center justify-center">
                    <Button
                      btnName={"Sign Up"}
                      disable={isclicked ? true : false}
                      formik={values}
                      type={"submit"}
                      // clickHandler={formik.handleSubmit}
                    />
                  </div>
                </Form>
              )}
            </Formik>
            <p className="text-[#2C7865] mt-2">---- Login with ----</p>
            <div className="flex items-center justify-center">
              <Button
                btnName={"Sign In With Google"}
                clickHandler={handleSigninwithGoogle}
                faicon={<FaGoogle />}
              />
            </div>
            <p className="text-[#90D26D] text-xl max-sm:mb-4 sm:mb-4 md:mb-4 sm:mt-5">
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
