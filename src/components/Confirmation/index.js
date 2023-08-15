import React from "react";
import StyledConfirmation from "./style";
import confirm from "../../assets/images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <StyledConfirmation>
      <img src={confirm} alt="" />
      <h1 className="heading">Thank You!</h1>
      <p className="bodyL">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </StyledConfirmation>
  );
};

export default Confirmation;
