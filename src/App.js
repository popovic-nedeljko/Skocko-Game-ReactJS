import Home from './pages/Home';
import Navbar from './pages/Navbar';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
