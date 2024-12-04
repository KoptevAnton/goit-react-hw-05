import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';
// import s from './App.module.css'

function App() {
  return (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
    </Routes>
    </>
  )
}

export default App;
