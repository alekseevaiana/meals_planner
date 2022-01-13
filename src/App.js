import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import CreateMeal from "./CreateMeal";
import { meals } from "./data.js";
import { useState } from "react";

function App() {
  const [mealsData, setMealsData] = useState(meals);

  // addNewMeal
  // addNewIngridientToTheMeal
  // cancelAddNewMeal

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home meals={meals} />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/new_meal"
            element={<CreateMeal meals={meals} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
