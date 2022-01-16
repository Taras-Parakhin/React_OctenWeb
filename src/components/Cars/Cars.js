import {useEffect, useState} from "react";

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(0);

    const deleteCar = async (id) => {
        await carService.deleteById(id);

        if (trigger === 0) {
            setTrigger(1);
        } else {
            setTrigger(0);
        }
    };

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    },[trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;