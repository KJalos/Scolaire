import classes from "./Input.module.css";

const Input = (props) => {
  const inputProps = {
    id: props.id,
    placeholder: props.placeholder,
    onChange: props.onChange,
    value: props.value,
  };
  return (
    <div className={`${classes["form-control"]} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>

      {props.textarea ? (
        <textarea {...inputProps} />
      ) : (
        <input type={props.type} {...inputProps} />
      )}
    </div>
  );
};

export default Input;
