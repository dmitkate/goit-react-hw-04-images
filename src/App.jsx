import React, { Component } from 'react';
import { FetchAPI } from 'fetch';
import { Searchbar } from './components/searchbar/Searchbar';
import { ImageGallery } from './components/gllery/gallery';
import { Loader } from 'components/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from 'components/btn';

export class App extends Component {
  state = {
    gallerys: [],
    isLoading: false,
    name: '',
    page: 1,
    totalHits: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      const { hits, totalHits: total } = await FetchAPI(
        this.state.name,
        this.state.page
      );
      if (hits.length === 0) {
        toast.error(`try again,${this.state.name} is not exis`);
      }
      this.setState(({ gallerys }) => ({
        gallerys: [...gallerys, ...hits],
        isLoading: false,
        totalHits: total,
      }));
    }
  }
  handleSubmitForm = name => {
    this.setState(prevState => ({
      gallerys: [],
      name: name,
      page: 1,
      isLoading: !prevState.isLoading,
    }));
  };
  onClickBtn = async () => {
    this.setState(({ page }) => ({
      page: page + 1,
      isLoading: true,
    }));
  };
  render() {
    const { isLoading, gallerys, totalHits } = this.state;
    return (
      <div>
        <Searchbar search={this.handleSubmitForm} />
        <ImageGallery gallerys={this.state.gallerys} />
        <ToastContainer autoClose={3000} />
        {isLoading && <Loader />}
        {!isLoading && gallerys.length > 0 && gallerys.length !== totalHits && (
          <Button onClickBtn={this.onClickBtn} />
        )}
      </div>
    );
  }
}
