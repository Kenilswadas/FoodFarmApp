import React from "react";
import { ErrorMessage, Field } from "formik";
const Inputfield = ({ formik, fieldName, fieldtype, label, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label
        className="mt-2 mb-0 ml-2 text-[#90D26D]"
        htmlFor={label}
      >{`${label}`}</label>
      <Field
        className="border p-2 border-[#90D26D] rounded-full"
        type={fieldtype}
        name={fieldName}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={fieldName}
        className="text-sm text-red-400"
        component={fieldName}
      />
    </div>
  );
};

export { Inputfield };
