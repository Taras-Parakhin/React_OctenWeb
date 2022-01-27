import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postsService = {
    getAll: ()=>axiosService(urls.posts).then(value => value.data),
    getById: (id)=>axiosService(`${urls.posts}/${id}`).then(value => value.data),
    getByUserId: (userId)=>axiosService(`${urls.users}/${userId}/posts`).then(value => value.data)
}