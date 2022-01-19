import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsService = {
    getByUserId: (userId)=>axiosService.get(`${urls.users}/${userId}/albums`).then(value => value.data)
}