import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
    const [search, setSearch] = useState('');

    const HandleChange = e => {
        setSearch(e.target.value.toLowerCase().trim());
    };

    const HandleSubmit = e => {
        e.preventDefault();
        onSubmit(search);
        setSearch('');
    };

    return (
        <form onSubmit={HandleSubmit} className={s.form}>
            <input
                type="text"
                onChange={HandleChange}
                placeholder="text here movie you wanted"
                autoFocus
                className={s.searchInput}
            />
            <button type="submit" className={s.searchBtn}>
                Search
            </button>
        </form>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
