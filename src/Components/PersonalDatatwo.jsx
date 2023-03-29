import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import * as Yup from "yup";
import Texterror from "./Texterror";

const initialValues = {
  name: "",
  phone: [
    {
      pname: "",
      price: "",
      version: "",
    },
  ],
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Field Required"),
});

const PersonalDatatwo = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
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
            />
            <ErrorMessage name="name" component={Texterror} />
          </div>
          <div className="mb-5">
            <label htmlFor="phone">Phone Numbers</label>
            <FieldArray name="phone">
              {(fieldarray) => {
                // console.log("fieldarray", fieldarray);
                const { push, remove, form } = fieldarray;
                const { values } = form;
                const { phone } = values;
                return (
                  <div>
                    {phone.map((value, index) => {
                      return (
                        <div key={index}>
                          <div className="mb-5">
                            <label htmlFor="phone_name">phone Name</label>
                            <Field
                              name={`phone[${index}].pname`}
                              className="block w-80 px-2 py-2 outline-none text-xl rounded"
                              style={{ border: "1px solid gray" }}
                            />
                          </div>
                          <div className="mb-5">
                            <label htmlFor="phoneprice">phone Price</label>
                            <Field
                              name={`phone[${index}].price`}
                              className="block w-80 px-2 py-2 outline-none text-xl rounded"
                              style={{ border: "1px solid gray" }}
                            />
                          </div>
                          <div className="mb-5">
                            <label>phone Version</label>
                            <Field
                              name={`phone[${index}].version`}
                              className="block w-80 px-2 py-2 outline-none text-xl rounded"
                              style={{ border: "1px solid gray" }}
                            />
                          </div>

                          {index > 0 && (
                            <button
                              onClick={() => remove(index)}
                              className="bg-slate-900 text-white mr-4" 
                              type="button"
                            >
                              remove
                            </button>
                          )}

                          {index === 0 && (
                            <button
                              onClick={() =>
                                push({
                                  pname: "",
                                  price: "",
                                  version: "",
                                })
                              }
                              className="bg-slate-900 text-white mr-4"
                              type="button"
                            >
                              add
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <input
            type="submit"
            style={{ border: "1px solid gray" }}
            className="p-2 bg-slate-400 rounded text-white font-semibold"
          />
        </Form>
      </div>
    </Formik>
  );
};

export default PersonalDatatwo;
