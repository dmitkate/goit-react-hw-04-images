import { ColorRing } from 'react-loader-spinner';
import { Component } from 'react';
import css from './gllery/gallery.module.css';
export class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }
}
