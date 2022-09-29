
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Sidebar} from './components/sidebar/Sidebar';
import { About } from './pages/About/About';
import { Resume } from './pages/Resume/Resume';
import { Home } from './pages/home/Home';
import { Works } from './pages/Works/Works';

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/works" element={<Works/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
