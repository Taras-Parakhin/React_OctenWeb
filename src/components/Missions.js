import './Mission.css';

function Missions(props)  {
    let {mission: {mission_name, launch_year, links: {mission_patch_small}}} = props

    return (
        <div className='mission'>
            <div>
                <h1>{mission_name}</h1>
                <div>{launch_year}</div>
            </div>
            <img src={mission_patch_small} alt='photo'/>
        </div>
    )
}

export default Missions;