import OAuthButton from "./OAuthButton";
import classes from "./OAuthButtons.module.css";

const OAuthButtons = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${classes["oauth-form"]} ${props.className || ""}`}
    >
      <OAuthButton platform="google" className={classes.google}>
        Google
      </OAuthButton>
      <OAuthButton platform="facebook" className={classes.facebook}>
        Facebook
      </OAuthButton>
      <OAuthButton platform="github" className={classes.github}>
        Github
      </OAuthButton>
    </form>
  );
};

export default OAuthButtons;
