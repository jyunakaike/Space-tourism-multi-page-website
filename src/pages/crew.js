import { Crew } from "../components/Crew";
import initialState from "db/initialState";

const crew = () => {
const crewList  = initialState.crew;

  return (
    <Crew crewList={crewList} />
  )
}

export default crew