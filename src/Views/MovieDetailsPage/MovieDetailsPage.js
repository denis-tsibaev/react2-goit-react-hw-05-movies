import { Route } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';

const MovieDetailsPage = () => {
    return (
        <div>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
        </div>
    );
};

export default MovieDetailsPage;
