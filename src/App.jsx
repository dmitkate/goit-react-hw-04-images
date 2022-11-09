import React, { useState, useEffect } from 'react';
import { FetchAPI } from 'fetch';
import { Searchbar } from './components/searchbar/Searchbar';
import { ImageGallery } from './components/gllery/gallery';
import { Loader } from 'components/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { Button } from 'components/btn';

export const App = () => {
  const [gallerys, setGallerys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (name.trim() === '') {
      return;
    }
    FetchAPI(name, page).then(response => {
      const { hits, totalHits } = response;
      if (hits.length === 0) {
        setIsLoading(false);
        toast.error(`try again,${name} is not exis`);
      }
      setGallerys(prevState => [...prevState, ...hits]);
      setTotalHits(totalHits);
      setIsLoading(false);
    });
  }, [name, page]);

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.name !== this.state.name ||
  //     prevState.page !== this.state.page
  //   ) {
  //     this.setState({ isLoading: true });

  //     const { hits, totalHits: total } = await FetchAPI(
  //       this.state.name,
  //       this.state.page
  //     );
  //     if (hits.length === 0) {
  //       toast.error(`try again,${this.state.name} is not exis`);
  //     }
  //     this.setState(({ gallerys }) => ({
  //       gallerys: [...gallerys, ...hits],
  //       isLoading: false,
  //       totalHits: total,
  //     }));
  //   }
  // }
  const handleSubmitForm = name => {
    setGallerys([]);
    setName(name);
    setPage(1);
    setIsLoading(!isLoading);
    // this.setState(prevState => ({
    //   gallerys: [],
    //   name: name,
    //   page: 1,
    //   isLoading: !prevState.isLoading,
    // }));
  };
  const onClickBtn = async () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  return (
    <div>
      <Searchbar search={handleSubmitForm} />
      <ImageGallery gallerys={gallerys} />
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
      {!isLoading && gallerys.length > 0 && gallerys.length !== totalHits && (
        <Button onClickBtn={onClickBtn} />
      )}
    </div>
  );
};
