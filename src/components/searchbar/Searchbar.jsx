import { Component } from 'react';
import css from './searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Searchbar extends Component {
  state = {
    imgName: '',
  };
  handleNameChange = e => {
    this.setState({ imgName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imgName.trim() === '') {
      toast.error('ENTER Name!!!');
      return;
    }
    this.props.search(this.state.imgName);
    this.setState({ imgName: '' });
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <FaSearch />
          </button>

          <input
            className={css.input}
            type="text"
            name="imgName"
            value={this.state.imgName}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
