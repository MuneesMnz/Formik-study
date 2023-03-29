import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'

const initialValues = {
  name: "",
  email: "",
  company: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (value) => {
  let errors = {};

  if (!value.name) {
    errors.name = "Required";
  }

  if (!value.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    errors.email = "Invalid email address";
  }

  if (!value.company) {
    errors.company = "Required";
  }

  return errors;
};
const validationSchema=Yup.object({
name:Yup.string().required("Field Required"),
email:Yup.string().email("Invalid Email Format").required("Field Required"),
company:Yup.string().required("Field Required"),
})


const OldPersonalData = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  });
  return (
    <div className="flex justify-center">
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-5">
        <label htmlFor="name" className="font-semibold flex mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-80 px-2 py-2 outline-none text-xl rounded"
          style={{ border: "1px solid gray" }}
         {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? <div className='text-red-900'>{formik.errors.name}</div> : null}
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="font-semibold flex mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-80 px-2 py-2 outline-none text-xl rounded"
          style={{ border: "1px solid gray" }}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? <div className=' text-red-900'>{formik.errors.email}</div> : null}
      </div>
      <div className="mb-5">
        <label htmlFor="company" className="font-semibold flex mb-2">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="block w-80 px-2 py-2 outline-none text-xl   rounded"
          style={{ border: "1px solid gray" }}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.company}
          {...formik.getFieldProps('company')}
        />
        {formik.touched.company && formik.errors.company ? <div className='text-red-900'>{formik.errors.company}</div> : null}
      </div>

      <input
        type="submit"
        style={{ border: "1px solid gray" }}
        className="p-2 bg-slate-400 rounded text-white font-semibold"
      />
    </form>
  </div>
  )
}


export default OldPersonalData ;
