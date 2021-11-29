import { useEffect, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import SearchForm from '../../components/SearchForm';
import noImage from '../../Images/default.jpg';
import { getMovieBySearch } from '../../Service/ServiceApi';
import s from './MoviesPage.module.css';

const MoviesPage = () => {
    const [movie, setMovie] = useState(null);
    const history = useHistory();
    const location = useLocation();

    const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

    const onChangeQuery = value => {
        history.push({ ...location, search: `query=${value}` });
    };

    useEffect(() => {
        if (!searchQuery) {
            return;
        }

        getMovieBySearch(searchQuery)
            .then(({ data }) => {
                if (data.results.length === 0) {
                    toast.error(`No movie for your request ${searchQuery}`);
                    setMovie({});
                }
                setMovie(data.results);
            })
            .catch(error =>
                toast.error('Sorry! Something wrong! Please, try again later'),
            );
    }, [searchQuery]);

    return (
        <section>
            <SearchForm onSubmit={onChangeQuery} />
            {movie && (
                <ul className={s.movieList}>
                    {movie.map(({ id, poster_path, title }) => (
                        <li key={id} className={s.movieItem}>
                            <NavLink to={{ pathname: `/movies/${id}` }}>
                                <p className={s.movieTitle}>{title}</p>
                                <img
                                    src={
                                        poster_path
                                            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                                            : noImage
                                    }
                                    alt={title}
                                    width="200"
                                />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default MoviesPage;
