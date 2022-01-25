import ScheduleItem from "./ScheduleItem";
import classes from "./ScheduleList.module.css"

const ScheduleList = (props) => {
  
  const handleDelete = (id) => {
    sendRequest(
      `https://scolaire-project-default-rtdb.firebaseio.com/schedule/${id}.json`,{
        method:'DELETE'
      }
    );
  }

  const items = props.items.map(item => {
    return <ScheduleItem key={item.id} {...item} onDelete={props.onDelete} />
  })

  return <ul className={classes.list}>
    {items}
  </ul>
}

export default ScheduleList;