import { useContext, useState } from "react";
import { useEffect, useRef } from "react/cjs/react.development";
import MenuContext from "../../../store/menu-context";
import classes from "./Collapse.module.css";


const Collapse = (props) => {
  const [isExpanded,setIsExpanded] = useState(false);
  const ref = useRef();
  const menuCtx = useContext(MenuContext);
  const {whitelistElementRec,cleanupMenu} = menuCtx;
  const handleClick = () => {
    setIsExpanded(isExpanded=>!isExpanded);
  }

  useEffect(()=>{
    // whitelist element
    if (ref.current) {
      whitelistElementRec(props.menuId,ref.current);
    }
    
    return ()=> {
        cleanupMenu(props.menuId)
    }
  },[props.menuId, whitelistElementRec, ref, cleanupMenu])

  return <div className={`${!isExpanded ? classes.collapse : ''} ${props.className || ''}`} >
    <button onClick={handleClick} className={classes.control} ref={ref}>{props.children}<span className={classes.caret}>&#9660;</span></button>
    <div className={classes['elements-container']}>
      {props.elements}
    </div>
  </div>
}

export default Collapse;