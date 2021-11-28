import { Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './Views/HomePage';
import MovieDetailsPage from './Views/MovieDetailsPage';
import MoviesPage from './Views/MoviesPage';
import NavigationMenu from './components/NavigationMenu';
import NotFoundPage from './Views/NotFoundPage';

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
