import './App.css';

import {getMissions} from "./services/serviceMissions";
import Missions from "./components/Missions";
import {useEffect, useState} from "react"

function App() {
  let [missions, setMissions] = useState([]);

  useEffect(() => {
    getMissions().then(value => setMissions(value.filter(item => item.launch_year !== '2020')))
  },[]);

  return (
    <div className="App">
      {
        missions.map((mission) => <Missions key={mission.flight_number} mission={mission}/>)
      }
    </div>
  );
}

export default App;



