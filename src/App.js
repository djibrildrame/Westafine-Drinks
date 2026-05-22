import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Histoire from "./Histoire/Histoire";
import Saveur from "./Saveur/Saveur";
import './App.css';

function App() {
  return (

        <div className="App">

        <Router>
      <Routes>
        <Route path="/" element={<Accueil />} /> 
        <Route path="/Accueil" element={<Accueil />} /> 
        <Route path="/Histoire" element={<Histoire />} /> 
        <Route path="/Saveur" element={<Saveur />} /> 
     
      </Routes>
    </Router>

    </div>

  );
}

export default App;
