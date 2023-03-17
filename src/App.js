import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Sidebar } from "./components/sidebar/Sidebar";
import { About } from "./components/About/About";
import { Resume } from "./components/Resume/Resume";
import { Home } from "./pages/home/Home";
import { Works } from "./components/Works/Works";
import { Contact } from "./components/Contact/Contact";
import { NotFound } from "./components/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
