import BookingPage from './pages/BookingPage';
import LandingPage from './pages/landing-page';
import NotFound from './pages/404/NotFound';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/booking"
        element={<ProtectedRoute element={BookingPage} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;