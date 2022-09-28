
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Sidebar} from './components/sidebar/Sidebar';
import { About } from './pages/About/About';
import { Experience } from './pages/Experience/Experience';
import { Home } from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/experience" element={<Experience/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
