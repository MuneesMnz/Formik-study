import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        {...rest}
        className="block w-80 px-2 py-2 outline-none text-xl   rounded"
        style={{ border: "1px solid gray" }}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
