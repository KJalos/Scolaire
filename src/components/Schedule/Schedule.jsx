import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import Container from "../Layout/Container";
import NewScheduleItem from "./NewScheduleItem";
import ScheduleList from "./ScheduleList";

const DUMMY_ITEMS = [
  { id: "item1", time: "09:00", description: "Breakfast" },
  { id: "item2", time: "10:00", description: "Go Jogging" },
  { id: "item3", time: "12:00", description: "Lunch" },
  { id: "item4", time: "13:00", description: "Study" },
];

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
    console.log(taskData);
  };

  return (
    <main>
      <Container>
        <h2>Schedule</h2>
        {/* New Item input form */}
        <NewScheduleItem onAddTask={handleAddTask} />
        {/* Schedule list */}
        <ScheduleList items={items} />
      </Container>
    </main>
  );
};

export default Schedule;
