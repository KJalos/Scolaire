import { Fragment, useEffect } from "react";


const NotFound = ()=> {
  useEffect(()=>{
    document.title ="Scolaire | Page not found"
  },[])
  return <Fragment>
    <p>In development...</p>
  </Fragment>
}

export default NotFound;

