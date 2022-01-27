import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {albumsService} from "../../services/albums.service";
import Albums from "../../components/albums/Albums";

import css from './AlbumsPage.module.css';

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        albumsService.getByUserId(id).then(value => setAlbums([...value]))
    },[id])

    return (
        <div className={css.albums}>
            {albums && <div>{albums.map(album => <Albums key={album.id} album={album}/>)}</div>}
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};