import React from "react";
import DatePickers from "./DatePicker";
import Input from "./Input";

const FormikControls = (props) => {
  const { control ,...rest } = props;
  switch (control) {
    case 'input':
        return <Input {...rest} />
    case 'date':
        return <DatePickers {...rest} />

    default: return null
  }
};

export default FormikControls;
