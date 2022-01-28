import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${classes["form-control"]} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.textarea ? <textarea
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      /> : <input
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />}
    </div>
  );
};

export default Input;
