// import logo from './logo.svg';
import Header from "./Components/Header";
import Creations from './Pages/Creations';
import Home from "./Pages/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import ProjectDetails from "./Pages/ProjectDetails";
import CreateProject from "./Pages/CreateProject";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/create" element={<CreateProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default App;
