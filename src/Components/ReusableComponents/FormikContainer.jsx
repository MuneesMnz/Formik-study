import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

const FormikContainer = () => {
  const initialValue = {
    email: "",
    date:null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required Email"),
    date:Yup.string().required("Date Required").nullable()
  });
  const onSubmit = (values) => console.log(values);
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControls
              control="input"
              type="email"
              name="email"
              label="Email"
            />
            <FormikControls 
            control="date"
            name="date"
            label="Date"
            />
            <button
              type="submit"
              style={{ border: "1px solid gray" }}
              className="p-2 bg-slate-400 rounded text-white font-semibold"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
