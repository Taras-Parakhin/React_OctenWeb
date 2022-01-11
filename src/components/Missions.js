import './Mission.css';
import {useEffect, useState} from "react";
import {getMissions} from "../services/serviceMissions";

function Missions(props)  {
    let [missions, setMissions] = useState([]);

    useEffect(() => {
        getMissions().then(value => setMissions(value.filter(item => item.launch_year !== '2020')))
    },[]);

    return (
        <>
            {missions.map(mission =>
                <div key={mission.flight_number} className='mission'>
                    <div>
                        <h1>{mission.mission_name}</h1>
                        <div>{mission.launch_year}</div>
                    </div>
                    <img src={mission.links.mission_patch_small} alt='photo'/>
                </div>)
            }
        </>
    )
}

export default Missions;