import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Texterror from "./Texterror";

const initialValues = {
  name: "",
  email: "",
  company: "",
  details: "",
  address: "",
  social: {
    facebook: "",
    instagram: "",
  },
  phone: [""],
};

const SaveValues = {
  name: "MNZ",
  email: "mnz@gmail.com",
  company: "fortelogic",
  details: "abc",
  address: "asd",
  social: {
    facebook: "aaa",
    instagram: "bbb",
  },
  phone: ["123"],
};

const onSubmit = (values, onsubmitProps) => {
  console.log(values);
  console.log("onSubmit Props", onsubmitProps);
  onsubmitProps.setSubmitting(false);
  onsubmitProps.resetForm();
};

// const validate = (value) => {

//   let errors = {};

//   if (!value.name) {
//     errors.name = "Required";
//   }

//   if (!value.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
//     errors.email = "Invalid email address";
//   }

//   if (!value.company) {
//     errors.company = "Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Field Required"),
  email: Yup.string().email("Invalid Email Format").required("Field Required"),
  company: Yup.string().required("Field Required"),
  details: Yup.string().required("Required Details"),
  address: Yup.string().required("address Required"),
});

const PersonalData = () => {
  const [Save, Setsave] = useState(null);
  // console.log(formik.values);
  return (
    <Formik
      initialValues={Save|| initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        // console.log("Formik" ,formik);
        return (
          <div className="flex justify-center">
            <Form>
              <div className="mb-5">
                <label htmlFor="name" className="font-semibold flex mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="block w-80 px-2 py-2 outline-none text-xl rounded"
                  style={{ border: "1px solid gray" }}
                  //  {...formik.getFieldProps('name')}
                />
                {/* {formik.touched.name && formik.errors.name ? <div className='text-red-900'>{formik.errors.name}</div> : null} */}
                <ErrorMessage name="name" component={Texterror} />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="font-semibold flex mb-2">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="block w-80 px-2 py-2 outline-none text-xl rounded"
                  style={{ border: "1px solid gray" }}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.email}
                  // {...formik.getFieldProps('email')}
                />
                {/* {formik.touched.email && formik.errors.email ? <div className=' text-red-900'>{formik.errors.email}</div> : null} */}
                <ErrorMessage name="email">
                  {(errormsg) => <div className="text-red-500">{errormsg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-5">
                <label htmlFor="company" className="font-semibold flex mb-2">
                  Company
                </label>
                <Field
                  type="text"
                  name="company"
                  id="company"
                  className="block w-80 px-2 py-2 outline-none text-xl   rounded"
                  style={{ border: "1px solid gray" }}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.company}
                  // {...formik.getFieldProps('company')}
                />
                {/* {formik.touched.company && formik.errors.company ? <div className='text-red-900'>{formik.errors.company}</div> : null} */}
                <ErrorMessage name="company" />
              </div>
              <div className="mb-5">
                <label>Details</label>
                <Field
                  as="textarea"
                  name="details"
                  id="details"
                  className="block w-80 px-2 py-2 outline-none text-xl   rounded"
                  style={{ border: "1px solid gray" }}
                />
                <ErrorMessage name="details" />
              </div>
              <div className="mb-5">
                <label>Address</label>
                <Field name="address">
                  {(props) => {
                    // console.log("props", props);
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input
                          type="text"
                          id="address"
                          {...field}
                          className="block w-80 px-2 py-2 outline-none text-xl   rounded"
                          style={{ border: "1px solid gray" }}
                        />
                        {meta.touched && meta.error ? (
                          <div>{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <div className="mb-5">
                <label htmlFor="facebook">Facebook</label>
                <Field
                  type="text"
                  name="social.facebook"
                  id="facebook"
                  className="block w-80 px-2 py-2 outline-none text-xl   rounded"
                  style={{ border: "1px solid gray" }}
                />
              </div>
              <div className="mb-5">
                <label htmlFor="instagram">Instagram</label>
                <Field
                  type="text"
                  name="social.instagram"
                  id="instagram"
                  className="block w-80 px-2 py-2 outline-none text-xl   rounded"
                  style={{ border: "1px solid gray" }}
                />
              </div>
              <div className="mb-5">
                <label>Phone Numbers </label>
                <FieldArray name="phone">
                  {(fieldArray) => {
                    // console.log("FieldArray", fieldArray);
                    const { push, remove, form } = fieldArray;
                    const { values } = form;
                    const { phone } = values;
                    // console.log("form errors", form.errors);
                    return (
                      <div className="mb-5">
                        {phone.map((value, index) => {
                          return (
                            <div key={index}>
                              <Field
                                type="text"
                                name={`phone[${index}]`}
                                className="block w-80 px-2 py-2 outline-none text-xl   rounded"
                                style={{ border: "1px solid gray" }}
                              />
                              {index > 0 && (
                                <button
                                  className="bg-slate-900 text-white mr-4 rounded p-1 mt-2"
                                  onClick={() => remove(index)}
                                  type="button"
                                >
                                  Remove
                                </button>
                              )}
                              <button
                                className="bg-slate-900 text-white mr-4 rounded p-1 mt-2"
                                onClick={() => push("")}
                                type="button"
                              >
                                Add
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              {/* <button type="button" onClick={()=>formik.setFieldTouched("company")} style={{border:"1px solid black",padding:"3px" ,marginRight:"3px"}}>Setting company Tounched</button>
              <button type="button" onClick={()=>formik.validateField("company")}  style={{border:"1px solid black",padding:"3px",marginRight:"3px"}} >setting company errors</button>
              <button type="button" onClick={()=>formik.validateForm()}  style={{border:"1px solid black",padding:"3px",marginRight:"3px"}}>setting Errors</button>
              <button type="button" onClick={()=>formik.setTouched({
                name:true,
                email:true,
                company:true,
                social:true,
                address:true
              })}  style={{border:"1px solid black",padding:"3px",marginRight:"3px"}}>Setting Touched All</button> */}

              <button
                style={{
                  border: "1px solid black",
                  padding: "3px",
                  marginRight: "3px",
                }}
                type="button"
                onClick={()=>Setsave(SaveValues )}
              >
                Save Data
              </button>
              <input
                type="submit"
                style={{ border: "1px solid gray" }}
                className="p-2 bg-slate-400 rounded text-white font-semibold"
                // disabled={!(formik.dirty &&formik.isValid)}
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default PersonalData;
