import { Fragment } from "react/cjs/react.production.min"
import NewScheduleItem from "../components/Schedule/NewScheduleItem";
import ScheduleItem from "../components/Schedule/ScheduleItem";
import Dropdown from "../components/UI/Dropdown/DropDown";
import Button from "../components/UI/Forms/Button";
import Checkbox from "../components/UI/Forms/Checkbox";
import Input from "../components/UI/Forms/Input";

const Design = () => {
  return <Fragment>
    
    <Dropdown>
      <h1 className="page-title">Test heading 1</h1>
      <h2 className="page-title">Test heading 2</h2>
      <h3 className="page-title">Test heading 3</h3>
      <h4 className="page-title">Test heading 4</h4>
      <h5 className="page-title">Test heading 5</h5>
      <h6 className="page-title">Test heading 9</h6>
      <Checkbox id="test1" label="Test" />
      <Input id="test" label="Test Label" placeholder={'Test placeholder'} />
      <Button>Default button</Button>
      <Button outline>Outline button</Button>
      <NewScheduleItem />
      <ScheduleItem time='TIME' description="DESCRIPTION" />
    </Dropdown>
  </Fragment>
}

export default Design;