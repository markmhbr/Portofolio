import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import BackgroundEffect from './components/BackgroundEffect';
import Home from './pages/Home';
import CV from './pages/CV';

function App() {
  return (
    <>
      <div className="no-print">
        <CursorTrail />
        <BackgroundEffect />
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
