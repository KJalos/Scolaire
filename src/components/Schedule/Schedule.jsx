import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Container from "../Layout/Container";
import NewScheduleItem from "./NewScheduleItem";
import ScheduleList from "./ScheduleList";

const Schedule = (props) => {
  const { sendRequest, data, isLoading, err } = useHttp();
  const [items, setItems] = useState([]);
  useEffect(() => {
    sendRequest(
      "https://scolaire-project-default-rtdb.firebaseio.com/schedule.json"
    );
  }, [sendRequest]);

  useEffect(() => {
    if (data)
      setItems(
        Object.keys(data).map((key) => ({
          id: key,
          time: data[key].time,
          description: data[key].description,
        }))
      );
  }, [data]);
  const handleAddTask = (taskData) => {
    // Add task to list items
    // console.log(taskData);
    setItems((items) => items.concat(taskData));
    console.log("Added task");
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <main>
      <Container>
        <h2>Schedule</h2>
        {/* New Item input form */}
        <NewScheduleItem onAddTask={handleAddTask} />
        {/* Schedule list */}
        {items.length > 0 ? (
          <ScheduleList items={items} onDelete={handleDelete} />
        ) : (
          <p>No items in your schedule</p>
        )}
      </Container>
    </main>
  );
};

export default Schedule;
