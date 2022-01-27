import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {photosService} from "../../services/photos.service";
import Photos from "../../components/photos/Photos";

import css from './PhotosPage.module.css';

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumsId} = useParams();

    useEffect(() => {
        photosService.getByAlbumId(albumsId).then(value => setPhotos([...value]))
    },[albumsId])

    return (
        <div className={css.photos}>
            {photos && <>{photos.map(photo => <Photos key={photo.id} photo={photo}/>)}</>}
        </div>
    );
};

export {PhotosPage};