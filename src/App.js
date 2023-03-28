import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<Error/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
