import css from './gallery.module.css';
import { useState } from 'react';
import { Modal } from 'components/modal/modal';

export const ImageGalleryItem = ({ gallerys }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(prevState => {
      setIsOpen(!prevState);
    });
  };
  const { id, webformatURL, tags } = gallerys;

  return (
    <li key={id} className={css.galleryList}>
      <img
        className={css.galleryListimg}
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
      />
      {isOpen && <Modal item={gallerys} close={toggleModal}></Modal>}
    </li>
  );
};
