import * as yup from "yup";

export const Myvalidation = yup.object().shape({
  email: yup
    .string()
    .email("Please Enter Valid Email Id")
    .required("Email id is Required"),
  firstName: yup
    .string()
    .matches(/^[A-Z a-z]*$/, "Please enter a valid First name")
    .min(3, "Please enter a First name more than 3 character")
    .required("First Name is Required"),
  lastName: yup
    .string()
    .matches(/^[A-Z a-z]*$/, "Please enter a valid Last name")
    .min(3, "Please enter a Last name more than 3 character")
    .required("Last Name is Required"),
});
