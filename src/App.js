import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import NavigationMenu from './components/NavigationMenu';
import { ReactComponent as Logo } from './Images/blue_long.svg';
import HomePage from './Views/HomePage';
import MovieDetailsPage from './Views/MovieDetailsPage';
import MoviesPage from './Views/MoviesPage';

function App() {
    return (
        <Container>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Logo style={{ width: 1000, marginBottom: 60 }} />
                <NavigationMenu />
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
