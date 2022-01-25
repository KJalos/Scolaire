import ScheduleItem from "./ScheduleItem";
import classes from "./ScheduleList.module.css"

const ScheduleList = (props) => {

  const items = props.items.map(item => {
    return <ScheduleItem key={item.id} {...item} />
  })

  return <ul className={classes.list}>
    {items}
  </ul>
}

export default ScheduleList;