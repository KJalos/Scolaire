import { useState } from "react";
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import InputBar from "../UI/Forms/InputBar";
import GroupList from "./GroupList";

import classes from "./FindGroups.module.css";

const FindGroups = (props) => {
  const { sendRequest, data, isLoading, err } = useHttp();
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    sendRequest(
      "https://scolaire-project-default-rtdb.firebaseio.com/groups.json"
    );
  }, [sendRequest]);

  useEffect(() => {
    if (data)
      setGroups(
        Object.keys(data).map((key) => ({
          id: key,
          time: data[key].time,
          description: data[key].description,
        }))
      );
  }, [data]);
  return (
    <div className={`${classes.container} ${props.className}`}>
      {/* Title */}
      <h2>Find groups</h2>
      {/* Search Bar */}
      <form>
        <InputBar
          placeholder="Find new groups..."
          buttonText={<i className="fas fa-search"></i>}
        />
      </form>
      {/* Group List */}
      {groups.length > 0 ? (
        <GroupList groups={groups} />
      ) : (
        <p>No groups found...</p>
      )}
    </div>
  );
};

export default FindGroups;
