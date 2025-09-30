import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import BookDetail from './Pages/BookDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
