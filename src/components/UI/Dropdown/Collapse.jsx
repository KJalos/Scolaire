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
        cleanupMenu(props.menuId,ref)
    }
  },[props.menuId, whitelistElementRec, ref, cleanupMenu])

  return <div className={`${!isExpanded ? classes.collapse : ''} ${props.className || ''}`} ref={ref}>
    <button onClick={handleClick}>{props.children}</button>
    <div className={classes['elements-container']}>
      {props.elements}
    </div>
  </div>
}

export default Collapse;