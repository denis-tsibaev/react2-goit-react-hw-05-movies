import { useEffect, useState } from 'react';
import {
    Route,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from '../../Service/ServiceApi';
import noImage from '../../Images/default.jpg';
import Cast from '../Cast';
import Reviews from '../Reviews';

const MovieDetailsPage = () => {
    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovieDetails(movieId)
            .then(({ data }) => {
                setMovie(data);
            })
            .catch(error =>
                toast.error('Something wrong! Please, try again later'),
            );
    }, [movieId]);

    return (
        <section>
            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/$500/${movie.poster_path}`
                        : noImage
                }
                alt={movie.title}
            />
            {/* <Route path="/movies/:movieId/cast" component={Cast} /> */}
            {/* <Route path="/movies/:movieId/reviews" component={Reviews} /> */}
        </section>
    );
};

export default MovieDetailsPage;
