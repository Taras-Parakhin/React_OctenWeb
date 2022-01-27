import css from './Photos.module.css';

const Photos = ({photo}) => {
    const {id, title, thumbnailUrl} = photo;

    return (
        <div className={css.photo}>
            <h3>{id}. {title}</h3>
            <img src={thumbnailUrl} alt="photo"/>
            <hr/>
        </div>
    );
};

export default Photos;