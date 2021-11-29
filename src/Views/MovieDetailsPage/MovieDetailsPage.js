import { useEffect, useState } from 'react';
import {
    NavLink,
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import noImage from '../../Images/default.jpg';
import { getMovieDetails } from '../../Service/ServiceApi';
import Cast from '../Cast';
import Reviews from '../Reviews';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const history = useHistory();
    const location = useLocation();
    const { url, path } = useRouteMatch();

    useEffect(() => {
        getMovieDetails(movieId)
            .then(({ data }) => {
                setMovie(data);

                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error =>
                toast.error('Something wrong! Please, try again later'),
            );
    }, [movieId]);

    const onGoBack = () => {
        history.push(location?.state?.from ?? '/');
    };

    const {
        poster_path,
        title,
        release_date,
        // tagline,
        overview,
        vote_average,
        genres,
    } = movie;

    return (
        <section>
            <button type="button" onClick={onGoBack} className={s.btnGoBack}>
                Go back
            </button>
            <img
                src={
                    poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : noImage
                }
                alt={title}
                width="400"
            />
            <div className={s.descriptionContainer}>
                <p className={s.descrItem}>{title}</p>
                <p className={s.descrItem}>Date of release: {release_date}</p>
                {genres && (
                    <ul className={s.genreList}>
                        Genres:
                        {genres.map(({ id, name }) => (
                            <li key={id}>
                                <span>{name}</span>
                            </li>
                        ))}
                    </ul>
                )}
                <p className={s.descrItem}>Average vote: {vote_average}</p>
                {/* <p className={s.descrItem}>Slogan: {tagline}</p> */}
                <p className={s.descrItem}>{overview}</p>
            </div>

            <hr />

            <nav className={s.descriptionContainer}>
                <h3>Additional information</h3>
                <NavLink
                    className={s.cast}
                    activeClassName={s.active}
                    to={{
                        pathname: `${url}/cast`,
                        state: { from: location?.state?.from },
                    }}
                >
                    Cast
                </NavLink>
                <NavLink
                    className={s.reviews}
                    activeClassName={s.active}
                    to={{
                        pathname: `${url}/reviews`,
                        state: { from: location?.state?.from },
                    }}
                >
                    Reviews
                </NavLink>
            </nav>

            <Switch>
                <Route path={`${path}:movieId/cast`}>
                    <Cast movieId={movieId} />
                </Route>
                <Route path={`${path}:movieId/reviews`}>
                    <Reviews movieId={movieId} />
                </Route>
            </Switch>
        </section>
    );
};

export default MovieDetailsPage;
