import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getCast } from '../../Service/ServiceApi';

const Cast = movieId => {
    // const [cast, setCast] = useState(null);

    // console.log(movieId);

    // useEffect(() => {
    //     getCast(movieId)
    //         .then(({ data }) => console.log(data))
    //         .catch(error =>
    //             toast.error('Something wrong! Please, try again later'),
    //         );
    // });

    return <div>{movieId}</div>;
};

export default Cast;
