import Home from './pages/Home/Home.tsx';
import Navbar from './pages/Navbar/Navbar.tsx';
import About from './pages/About/About.tsx';
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
