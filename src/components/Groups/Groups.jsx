import Container from "../Layout/Container";
import FindGroups from "./FindGroups";
import MyGroups from "./MyGroups";
import classes from "./Groups.module.css";
import defaultPageStyles from "../Layout/DefaultPageStyles.module.css";

const Groups = () => {
  return (
    <Container
      className={`${defaultPageStyles["main-container"]} ${classes.container}`}
    >
      {/* My Groups */}
      <MyGroups />
      {/* Find Groups */}
      <FindGroups />
    </Container>
  );
};

export default Groups;
