import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import HomePage from './Views/HomePage';
import MovieDetailsPage from './Views/MovieDetailsPage';
import MoviesPage from './Views/MoviesPage';
import NavigationMenu from './components/NavigationMenu';
import NotFoundPage from './Views/NotFoundPage';

function App() {
    return (
        <Container>
            <Suspense fallback={<h2>Loading...</h2>}>
                <NavigationMenu />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/movies" component={MoviesPage} />
                    <Route
                        path="/movies/:movieId"
                        component={MovieDetailsPage}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </Suspense>
            <ToastContainer />
        </Container>
    );
}

export default App;
