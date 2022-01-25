import { Fragment, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import useHttp from "../../hooks/use-http";
import Input from "../UI/Forms/Input";
import SearchBar from "../UI/Forms/SearchBar";
import classes from "./NewScheduleItem.module.css";

const NewScheduleItem = (props) => {
  const { sendRequest, data, isLoading, err } = useHttp();
  const [enteredTime, setEnteredTime] = useState("07:00");
  const [enteredDescription, setEnteredDescription] = useState("");
  const { onAddTask } = props;

  const handleTimeChange = (event) => {
    setEnteredTime(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setEnteredDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate inputs
    // Send POST request
    // //TODO replace schedule.json with <userId>.json
    const url =
      "https://scolaire-project-default-rtdb.firebaseio.com/schedule.json";
    await sendRequest(url, {
      method: "POST",
      body: {
        time: enteredTime,
        description: enteredDescription,
        dateAdded: new Date().toString(),
      },
    });
    onAddTask({
      id: data.name,
      time: enteredTime,
      description: enteredDescription,
    });
  };

  return (
    <Fragment>
      <form className={classes["new-item-form"]} onSubmit={handleSubmit}>
        {/* Time Input */}
        {/* Description Input */}
        <Input
          type="time"
          className={classes.time}
          onChange={handleTimeChange}
          value={enteredTime}
        />
        <SearchBar
        className={classes['description-button-container']}
          placeholder="Add new Task"
          onChange={handleDescriptionChange}
          value={enteredDescription}
          buttonText={<i className="fas fa-plus"></i>}
        />
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : err ? (
        <p>{err.toString()}</p>
      ) : (
        data && <p>Success</p>
      )}
    </Fragment>
  );
};

export default NewScheduleItem;
