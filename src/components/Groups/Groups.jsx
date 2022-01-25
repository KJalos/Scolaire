import Container from "../Layout/Container"
import FindGroups from "./FindGroups"
import MyGroups from "./MyGroups"
import classes from "./Groups.module.css"
import { Fragment } from "react"

const Groups = () => {
  return<Fragment>
     <Container className={classes.container} >
      {/* My Groups */}
      <MyGroups />
      {/* Find Groups */}
    </Container>
    <FindGroups />
  </Fragment>
}

export default Groups