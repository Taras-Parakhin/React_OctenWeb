import {useForm} from "react-hook-form";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";
import {carService} from "../../services/car.service";

const Form = () => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState:{errors}
    } = useForm({resolver:joiResolver(CarValidator), mode: 'onTouched'});

    const submit = async (car) => {
        try {
            if (car.id) {
                let id = car.id;
                await carService.updateById(id, car)
            }else {
                await carService.create(car);
            }
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <div><label>Id: <input type="text" defaultValue={''} {...register('id')}/></label></div>
                {errors.id && <span>{errors.id.message}</span>}
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;