import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import CreateMeal from "./CreateMeal";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/new_meal" element={<CreateMeal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
