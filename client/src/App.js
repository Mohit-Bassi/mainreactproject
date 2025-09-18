import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Support from "./screens/Support";
import Employee from "./screens/Employee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./screens/Header";
import Cal from "./screens/Cal";
import Cal1 from "./screens/Cal1";

function App() {
  return (
    <div className="App">
      <h2 className="text-info">Welcome Dhruv</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Contact />} />
          <Route path="employee" element={<Employee />} />
          <Route path="" element={<Home />} />
          <Route path="cal" element={<Cal />} />
          <Route path="cal1" element={<Cal1 />} />
        </Routes>
      </BrowserRouter>

      {/* <Home />
      <About />
      <Contact />
      <Support />
      <Employee /> */}
    </div>
  );
}

export default App;
