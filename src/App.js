import './App.css';
import BookingPage from './pages/booking';
import LandingPage from './pages/landing-page';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
