import Input from "./Input";
import classes from "./InputBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={`${classes["search-bar"]} ${props.className}`}>
      <Input
        type="text"
        className={classes["search-input"]}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      {props.buttonText && (
        <button className={classes.button}>{props.buttonText}</button>
      )}
    </div>
  );
};

export default SearchBar;
