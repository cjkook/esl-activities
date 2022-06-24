import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FlashcardsPage from "./pages/flashcards/flashcards-page";
import Navbar from "./components/navbar/navbar-component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>

          <Routes>
            <Route path="/about"></Route>
            <Route path="/flashcards" element={<FlashcardsPage />}></Route>
            <Route path="/"></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
