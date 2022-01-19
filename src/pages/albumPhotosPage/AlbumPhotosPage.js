import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import Photos from "../../components/photos/Photos";
import {photosService} from "../../services/photos.service";

import css from './AlbumPhotosPage.module.css';

const AlbumPhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        photosService.getByAlbumId(id).then(value => setPhotos([...value]))
    },[id])

    return (
        <div className={css.album}>
            {photos && (<div>{photos.map(photo => <Photos key={photo.id} photo={photo}/>)}</div>)}
        </div>
    );
};

export default AlbumPhotosPage;