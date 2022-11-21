import React from "react";
import { useFormik } from "formik";
import { Myvalidation } from "./Validation";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function AddUser(props) {

  const onSubmit = (values, action) => {

    axios
      .post("https://reqres.in/api/users", {

        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
      })
      .then((Response) => {
        props.history.push("/");
      })
      .catch((error) =>{
        console.log(error)
        props.history.push("/ErrorPage");
      });
  };
  const formik = useFormik({
    initialValues: {
        email: "",
        firstName: "",
        lastName: "",
    },
    validationSchema: Myvalidation,
    onSubmit,
  });
  return (
    <div>
      <h1>Add User Form</h1>
      <form onSubmit={formik.handleSubmit}
      className="formClass">
        <div>
        <label htmlFor='email'><pre>Email Id-</pre></label>
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            placeholder="Enter Email Id"
          ></input>
          {formik.errors.email && !formik.errors.touched && (
            <h6 className="formError">{formik.errors.email}</h6>
          )}
        </div>
        <div>
        <label htmlFor='firstName'><pre>First Name-</pre></label>
          <input
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            id="firstName"
            placeholder="Enter First Name "
          ></input>
          {formik.errors.firstName && !formik.errors.touched  && (
            <h6 className="formError">{formik.errors.firstName}</h6>
          )}
        </div>
        <div>
        <label htmlFor='lastName'><pre>Last Name-</pre></label>
          <input
            value={formik.values.lastName}
            type="text"
            id="lastName"
            onChange={formik.handleChange}
            placeholder="Enter Last Name "
            autoComplete="off"
          ></input>
          {formik.errors.lastName && !formik.errors.touched  && (
            <h6 className="formError">{formik.errors.lastName }</h6>
          )}
        </div>
        <Button variant="contained" color="success" type="submit" id="submit" className="submit">
  Submit
</Button>
          
      </form>
    </div>
  );
}

export default withRouter(AddUser);