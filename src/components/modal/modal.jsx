import { Component } from 'react';
import css from './modal.module.css';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onToggle();
    }
  };

  backdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onToggle();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.backdropClick}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
