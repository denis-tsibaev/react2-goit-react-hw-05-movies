import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import NavigationMenu from './components/NavigationMenu';
import Spinner from './components/Spinner';
import { ReactComponent as Logo } from './Images/blue_long.svg';

const HomePage = lazy(() =>
    import('./Views/HomePage' /*webpackChunkName: "HomePage"*/),
);
const MovieDetailsPage = lazy(() =>
    import(
        './Views/MovieDetailsPage' /*webpackChunkName: "MovieDetailsPage" */
    ),
);

const MoviesPage = lazy(() =>
    import('./Views/MoviesPage' /*webpackChunkName: "MoviesPage" */),
);

function App() {
    return (
        <Container>
            <Logo style={{ width: 1000, marginBottom: 60 }} />
            <NavigationMenu />
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route
                        path="/movies/:movieId"
                        component={MovieDetailsPage}
                    />
                    <Route path="/movies" component={MoviesPage} />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="colored"
            />
        </Container>
    );
}

export default App;
