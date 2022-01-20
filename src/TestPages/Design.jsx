import { Fragment } from "react/cjs/react.production.min"
import Dropdown from "../components/UI/Dropdown/DropDown";
import Checkbox from "../components/UI/Forms/Checkbox";
import NavItem from "../components/UI/NavBar/NavItem";

const Design = () => {
  return <Fragment>
    <Checkbox id="test1" label="Test" />
    <Dropdown>
      <NavItem destPath="/TEST">Test item 1</NavItem>
    </Dropdown>
  </Fragment>
}

export default Design;