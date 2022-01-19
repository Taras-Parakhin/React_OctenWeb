import {useEffect, useState} from "react";
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import UserAlbums from "../../components/userAlbums/UserAlbums";

import css from './UserAlbumsPage.module.css';

const UserAlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        albumsService.getByUserId(id).then(value => setAlbums([...value]))
    },[id])

    return (
        <div className={css.albums}>
            {albums && (<div>{albums.map(album => <UserAlbums key={album.id} album={album}/>)}</div>)}
            <Outlet/>
        </div>
    );
};

export default UserAlbumsPage;