import classes from "./OAuthButton.module.css";

const OAuthButton = (props) => {
  return (
    <button className={`${classes.button} ${props.className || ""}`}>
      <img
        src={require("./logo-" + props.platform + ".svg")}
        alt={props.platform + " logo"}
      />
      <span>Continue&nbsp;with&nbsp;{props.children}</span>
    </button>
  );
};

export default OAuthButton;
