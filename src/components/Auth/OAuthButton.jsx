import classes from "./OAuthButton.module.css";

const OAuthButton = (props) => {
  return (
    <button className={`${classes.button} ${props.className || ""}`}>
      <i className={`fab fa-${props.platform}`}></i>
      <span>Continue&nbsp;with&nbsp;{props.children}</span>
    </button>
  );
};

export default OAuthButton;
