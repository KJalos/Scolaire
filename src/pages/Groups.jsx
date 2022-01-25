import { Fragment, useEffect } from "react";
import GroupsContent from "../components/Groups/Groups";

const Groups = ()=> {
  useEffect(()=>{
    document.title ="Scolaire | Groups"
  },[])
  return <GroupsContent />
}

export default Groups;

