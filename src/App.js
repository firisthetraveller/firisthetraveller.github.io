// import logo from './logo.svg';
import Header from "./Components/Header";
import Creations from './Pages/Creations';
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creations" element={<Creations />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
