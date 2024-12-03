import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import s from './App.module.css'

function App() {
  return (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
    </Routes>
    </>
  )
}

export default App;
