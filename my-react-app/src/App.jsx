import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavigationBar from "./components/NavBar/NavigationBar";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Technology from "./pages/Technology";
import Travel from "./pages/Travel";
import "./App.css";
import Upload from "./pages/Upload";

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<Design />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
