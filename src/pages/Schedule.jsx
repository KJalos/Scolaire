import {  useEffect } from "react";
import ScheduleContent from "../components/Schedule/Schedule"

const Schedule = ()=> {
  useEffect(()=>{
    document.title ="Scolaire | Schedule";
  },[])
  return  <ScheduleContent />
}

export default Schedule;

