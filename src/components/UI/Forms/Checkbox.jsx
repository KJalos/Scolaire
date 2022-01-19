import classes from "./Checkbox.module.css";
import formClasses from "./Form.module.css"

const Checkbox = (props) => {
  return (
    <div
      className={`${formClasses["form-control"]} ${classes.checkbox} ${props.className || ""}`}
    >
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
