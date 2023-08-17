import React, { useState } from "react";
import StyledAddOn from "./style";

const AddOnElement = ({
  isYearly,
  price,
  title,
  subtitle,
  onSelectionChange,
  selectedAdds,
}) => {
  const [selectedAdd, setSelectedAdd] = useState(
    !!selectedAdds.find((el) => el.title === title)
  );

  const handleAddSelection = () => {
    const newSelected = !selectedAdd;
    setSelectedAdd(newSelected);
    onSelectionChange(title, newSelected);
  };

  return (
    <StyledAddOn className={selectedAdd ? "active" : ""}>
      <label className="checkboxContainer">
        <input
          type="checkbox"
          onClick={handleAddSelection}
          defaultChecked={selectedAdd}
        />
        <span className="checkmark"></span>
      </label>

      <div className="details">
        <div className="titleContainer">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
        <p className="price">
          +${isYearly ? price * 10 : price}/{isYearly ? "yr" : "mo"}
        </p>
      </div>
    </StyledAddOn>
  );
};

export default AddOnElement;
