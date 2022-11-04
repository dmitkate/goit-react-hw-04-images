import css from './btn.module.css';
export function Button({ onClickBtn }) {
  return (
    <button className={css.button} type="button" onClick={onClickBtn}>
      Load more...
    </button>
  );
}
