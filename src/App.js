import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './components/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage';
import MoviesPage from './components/MoviesPage';
import NavigationMenu from './components/NavigationMenu';
import NotFoundPage from './components/NotFoundPage';

function App() {
    return (
        <Container>
            <NavigationMenu />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/movies" component={MoviesPage} />
                <Route path="/movies/:movieId" component={MovieDetailsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Container>
    );
}

export default App;
