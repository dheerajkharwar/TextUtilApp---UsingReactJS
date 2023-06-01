// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./student/AddStudent";
import EditStudent from "./student/EditStudent";
import ViewStudent from "./student/ViewStudent";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addStudent" element={<AddStudent />} />
          <Route exact path="/editStudent/:id" element={<EditStudent />} />
          <Route exact path="/viewStudent/:id" element={<ViewStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
