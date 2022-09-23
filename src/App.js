
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Sidebar} from './components/sidebar/Sidebar';
import { Home } from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
