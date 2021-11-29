import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import { getReviews } from '../../Service/ServiceApi';
import s from './Reviews.module.css';

const Reviews = ({ movieId }) => {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        getReviews(movieId)
            .then(({ data }) => {
                setReviews(data.results);
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error =>
                toast.error('Sorry! Something wrong! Try again later'),
            );
    }, [movieId]);

    return (
        <section>
            {!reviews ? (
                <Spinner />
            ) : reviews.length === 0 ? (
                <p className={s.noReview}>Noone left reviews yet</p>
            ) : (
                <ul className={s.reviewsList}>
                    {reviews.map(({ author, content, updated_at, id }) => (
                        <li key={id} className={s.rewiewsItem}>
                            <p>Author: {author}</p>
                            <p>{content}</p>
                            <p>{dayjs(updated_at).format('DD.MM.YYYY')}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

Reviews.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default Reviews;
