import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Project from './components/Project';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Project />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
