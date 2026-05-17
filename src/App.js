import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Rules from './pages/Rules';
import Landing from './pages/Landing';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/'       element={<Landing />} />
        <Route path='/game'   element={<Home />} />
        <Route path='/about'  element={<Rules />} />
      </Routes>
    </>
  );
}

export default App;
