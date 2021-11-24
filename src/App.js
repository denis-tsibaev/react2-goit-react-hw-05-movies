import { Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import NotFoundPage from './components/NotFoundPage';
import NavigationMenu from './components/NavigationMenu';

function App() {
    return (
        <Container>
            <NavigationMenu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
                <Route element={<NotFoundPage />} />
            </Routes>
        </Container>
    );
}

export default App;
