import React from "react";
import { ErrorMessage, Field } from "formik";
const Inputfield = ({ fieldName, fieldtype, label, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label
        className="mt-2 mb-1 ml-2  font-semibold text-[#2C7865]"
        htmlFor={label}
      >{`${label}`}</label>
      <Field
        className="border pl-4 p-2 border-[#90D26D] rounded-full"
        type={fieldtype}
        name={fieldName}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={fieldName}
        className="text-sm text-red-500 pl-4"
        component={fieldName}
      />
    </div>
  );
};

export { Inputfield };
