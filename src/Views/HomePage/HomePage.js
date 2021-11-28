import { useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import noImage from '../../Images/default.jpg';
import { getTrendingMovies } from '../../Service/ServiceApi';
import s from './HomePage.module.css';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const { url } = useRouteMatch();
    const location = useLocation();

    useEffect(() => {
        getTrendingMovies()
            .then(({ data }) => setMovies(data.results))
            .catch(error =>
                toast.error('Something wrong! Please, try agan later'),
            );
    }, []);

    return (
        <section>
            {movies && (
                <>
                    <h1 className={s.pageTitle}>Trending for last week</h1>
                    <ul className={s.movieList}>
                        {movies.map(({ id, poster_path, title }) => (
                            <li key={id} className={s.movieItem}>
                                <Link
                                    to={{
                                        pathname: `${url}/movies${id}`,
                                        state: { from: location },
                                    }}
                                >
                                    <img
                                        src={
                                            poster_path
                                                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                                                : noImage
                                        }
                                        alt={title}
                                    />
                                    <p className={s.movieTitle}>{title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
};

export default HomePage;
