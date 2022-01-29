import { useState } from "react";
import classes from "./Checkbox.module.css";

const Checkbox = (props) => {
  const [checked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked((curVal) => !curVal);
  };

  const componentClasses = `${
    classes.checkbox
  } ${checked ? classes.checked : ""} ${props.className || ""}`;

  return (
    <div className={componentClasses} onClick={handleClick}>
      {checked && <i className={`${classes.checkmark} fas fa-check`}></i>}
      {/* <input type="checkbox" id={props.id}/> */}
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
