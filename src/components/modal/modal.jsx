import css from './modal.module.css';
import { createPortal } from 'react-dom';

import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ item, close }) => {
  const { largeImageURL, tags } = item;
  const keyDown = event => {
    if (event.code === 'Escape') {
      close();
    }
  };

  const backdropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });

  return createPortal(
    <div className={css.overlay} onClick={backdropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} width="820" />
      </div>
    </div>,
    modalRoot
  );
};
