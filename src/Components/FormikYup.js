import React, { useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(3).required(),
  email: yup.string().required(),
  password: yup.string().min(3).required(),
  confirmpassword: yup.string().min(3).required(),

});

const FormikYup = () => {
  const handleOnSubmit = (values) => {
    const fullName = Object.keys(values)
      .map((key) => values[key])
      .join(" ");
    alert(`Hello ${fullName}!`);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email:"",
      password:"",
      confirmpassword:"",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        placeholder="Type your First Name"
        value={formik.values.firstName}
        onChange={(e) => setInputValue("firstName", e.target.value)}
      />
      <small>{formik.errors.firstName}</small>
      <input
        placeholder="Type your Last Name"
        value={formik.values.lastName}
        onChange={(e) => setInputValue("lastName", e.target.value)}
      />
      <small>{formik.errors.lastName}</small>
      <input
        placeholder="Type your Email"
        value={formik.values.email}
        onChange={(e) => setInputValue("email", e.target.value)}
      />
      <small>{formik.errors.email}</small>
      <input
        placeholder="Type your Password"
        value={formik.values.password}
        onChange={(e) => setInputValue("password", e.target.value)}
      />
      <small>{formik.errors.password}</small> //<ErrorMessage name='password'/>
      <input
        placeholder="Type your confirmPassword"
        value={formik.values.confirmpassword}
        onChange={(e) => setInputValue("confirmpassword", e.target.value)}
      />
      <small>{formik.errors.confirmpassword}</small>

      {!!formik.errors.confirmpassword && <br />}
      <button type="submit" onClick={()=>alert('Submitted')}>
        Submit
      </button>
    </form>
  );
};

export default FormikYup;
