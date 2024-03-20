import css from "./ImageCard.module.css";

const ImageCard = ({ alt, src, onHandleClick, srcLarge }) => {
    return (
        <div className={css.imageContainer} onClick={onHandleClick} data-src={srcLarge}>
            <img src={src} alt={alt} className={css.image} />
        </div>
    );
};

export default ImageCard;
