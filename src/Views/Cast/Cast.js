import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner';
import noImage from '../../Images/default.jpg';
import { getCast } from '../../Service/ServiceApi';
import s from './Cast.module.css';

const Cast = ({ movieId }) => {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        getCast(movieId)
            .then(({ data }) => {
                setCast(data.cast);
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                });
            })
            .catch(error =>
                toast.error('Something wrong! Please, try again later'),
            );
    }, [movieId]);

    return (
        <section>
            {!cast ? (
                <Spinner />
            ) : (
                cast && (
                    <ul className={s.castList}>
                        {cast.map(({ id, name, profile_path }) => (
                            <li key={id} className={s.castItem}>
                                <p className={s.castName}>{name}</p>
                                <img
                                    src={
                                        profile_path
                                            ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                                            : noImage
                                    }
                                    alt={name}
                                    className={s.castImage}
                                />
                            </li>
                        ))}
                    </ul>
                )
            )}
        </section>
    );
};

Cast.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default Cast;
