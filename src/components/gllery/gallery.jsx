import css from './gallery.module.css';

import { ImageGalleryItem } from './imggalleryitem';
export const ImageGallery = ({ gallerys }) => (
  <ul className={css.gallery}>
    {gallerys.map(({ id, largeImageURL, webformatURL, tags }) => (
      <ImageGalleryItem
        key={id}
        gallerys={{ id, largeImageURL, webformatURL, tags }}
      />
    ))}
  </ul>
);
