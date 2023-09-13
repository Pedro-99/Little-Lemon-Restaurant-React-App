import BookingPage from './pages/BookingPage';
import LandingPage from './pages/landing-page';
import { Route, Routes } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
