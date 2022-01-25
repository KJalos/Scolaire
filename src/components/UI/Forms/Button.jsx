import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${
        classes[props.outline ? "btn-outline" : "btn-default"]
      }`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
