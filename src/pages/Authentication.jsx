import { Fragment, useEffect } from "react";


const Authentication = ()=> {
  useEffect(()=>{
    document.title ="You should not be here"
  },[])
  return <Fragment>
    <p>In development...</p>
  </Fragment>
}

export default Authentication;

