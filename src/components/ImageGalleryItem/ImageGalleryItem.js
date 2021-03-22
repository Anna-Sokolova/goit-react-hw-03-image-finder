import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, selectedImageModal, onClick }) => (
  <li className={styles.imageGalleryItemImage} onClick={onClick}>
    <img
      src={src}
      alt={alt}
      data-source={selectedImageModal}
      className={styles.imageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;
