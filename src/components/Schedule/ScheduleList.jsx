import useHttp from "../../hooks/use-http";
import ScheduleItem from "./ScheduleItem";
import classes from "./ScheduleList.module.css";

const ScheduleList = (props) => {
  const { sendRequest, data, isLoading, err } = useHttp();

  const handleDelete = (id) => {
    sendRequest(
      `https://scolaire-project-default-rtdb.firebaseio.com/schedule/${id}.json`,
      {
        method: "DELETE",
      },
      () => {
        props.onDelete(id);
      }
    );
  };

  const items = props.items.map((item) => {
    return <ScheduleItem key={item.id} {...item} onDelete={handleDelete} />;
  });

  return <ul className={classes.list}>{items}</ul>;
};

export default ScheduleList;
