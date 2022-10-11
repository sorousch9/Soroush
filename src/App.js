import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { About } from "./pages/About/About";
import { Resume } from "./pages/Resume/Resume";
import { Home } from "./pages/home/Home";
import { Works } from "./pages/Works/Works";
import { Contact } from "./pages/Contact/Contact";
import { NotFound } from "./pages/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
