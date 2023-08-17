import React from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import StyledStep1 from "./style";
import { userSchema } from "../../validation/UserValidation";
import { useFormik } from "formik";

const Step1 = ({ nextStep }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      nextStep();
    },
  });

  const isFormValid = Object.keys(formik.errors).length === 0 && formik.dirty;

  return (
    <StyledStep1 onSubmit={formik.handleSubmit}>
      <div className="main">
        <div className="title">
          <p className="heading">Personal info</p>
          <p className="bodyL">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="inputContainer">
          <Input
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
          />
          <Input
            type="text"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            label="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />
          <Input
            type="text"
            id="phoneNumber"
            placeholder="e.g. +994 55 789 45 12"
            label="Phone Number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </div>
      </div>
      <div className="btn-container">
        <Button
          disabled={!isFormValid}
          type="submit"
          text="Next step"
          className="primary"
        />
      </div>
    </StyledStep1>
  );
};

export default Step1;
