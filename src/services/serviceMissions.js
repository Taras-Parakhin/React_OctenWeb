const getMissions = () => {
    return fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
}

const getMission = (flight_number) => {
    return fetch('https://api.spacexdata.com/v3/launches/' + flight_number)
        .then(value => value.json())
}

export {getMissions, getMission};