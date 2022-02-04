import {useDispatch} from "react-redux";

import {deleteCarThunk} from "../../store";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    return (
       <div>
           <div>
               <div>Model: {model}</div>
               <div>Price: {price}</div>
               <div>Year: {year}</div>
           </div>
           <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
       </div>
    );
};

export {Car};