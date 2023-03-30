import { ErrorMessage, Field } from "formik";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker  from "react-datepicker";
import TextError from "./TextError";

const DatePickers = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="mb-5">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({form, field}) => {
          const { setFieldValue } = form;
          const { value } = field;
          return <DatePicker id={name} {...field} {...rest} selected={value} onChange={val=>setFieldValue(name,val)}  />;
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePickers;
