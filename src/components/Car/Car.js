const Car = ({car, deleteCar}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>deleteCar(id)}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;