import { useState, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Container from "../Layout/Container";
import SearchBar from "../UI/Forms/SearchBar";
import GroupList from "./GroupList";

const MyGroups = () => {
  const { sendRequest, data, isLoading, err } = useHttp();
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    sendRequest(
      "https://scolaire-project-default-rtdb.firebaseio.com/testUser1/groups.json"
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
    <div>
      {/* Title */}
      <h2>My groups</h2>
      {/* Search Bar */}
      <form>
        <SearchBar
          placeholder="Search my groups..."
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

export default MyGroups;
