import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AuthSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Username is too short")
    .max(30, "Username is too long")
    .required("Username is Required."),
  password: Yup.string()
    .min(2, "Password is too short")
    .max(30, "Password is too long")
    .required("Password is Required.")
});

const AuthForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: ""
      }}
      validationSchema={AuthSchema}
      onSubmit={values => handleSubmit(values)}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="username" />
          {errors.username && touched.username ? (
            <div>{errors.username}</div>
          ) : null}
          <Field name="password" type="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
