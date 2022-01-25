import classes from "./ScheduleItem.module.css";

const ScheduleItem = (props) => {
  return (
    <li className={classes.item}>
      {/* Time */}
      <span className={classes.time}>{props.time}</span>
      {/* Description */}
      <span className={classes.description}>{props.description}</span>
    </li>
  );
};

export default ScheduleItem;
