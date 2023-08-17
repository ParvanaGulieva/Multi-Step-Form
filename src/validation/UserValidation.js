import * as yup from "yup";

const phoneRegExp = /^\+\d{3} \d{2} \d{3} \d{2} \d{2}$/;

export const userSchema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  name: yup.string().required("Name is required"),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid"),
});
