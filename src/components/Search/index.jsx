import styles from "./index.module.scss";

const Search = ({ handleSearch }) => {
  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <input
        required
        maxLength="50"
        type="search"
        name="query"
        spellCheck="false"
        autoComplete="off"
        placeholder="Search character name"
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
