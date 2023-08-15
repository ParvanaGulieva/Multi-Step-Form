import React from "react";
import StyledStep from "./style";

const Step = ({ num, title, active }) => {
  return (
    <StyledStep>
      <div className={active ? "stepNum bodyM active " : "stepNum bodyM"}>
        {num}
      </div>
      <div className="title">
        <p className="bodyS">STEP {num}</p>
        <p className="title bodyM">{title}</p>
      </div>
    </StyledStep>
  );
};

export default Step;
