import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import CreateMeal from "./CreateMeal";
import { meals } from "./data.js";
import { useState } from "react";

function App() {
  const [mealsData, setMealsData] = useState(meals);
  const [inputIngridient, setInputIngridient] = useState();
  const [ingridients, setIngridients] = useState(["chicken"]);
  const [inputIngridientName, setInputIngridientName] = useState();
  const navigate = useNavigate();

  const handleIngridientInput = (e) => {
    setInputIngridient(e.target.value);
  };

  const handleIngridientNameInput = (e) => {
    setInputIngridientName(e.target.value);
  };

  const handleAddIngridient = () => {
    setIngridients((prev) => [...prev, inputIngridient]);
    setInputIngridient("");
  };

  const handleAddMealBtn = () => {
    const new_meal = { name: inputIngridientName, ingridients };
    setMealsData((prevMealsData) => [...prevMealsData, new_meal]);
    setIngridients([]);
    navigate("/");
  };

  const handleCancelMealBtn = () => {
    setIngridients([]);
    setInputIngridientName("");
    navigate("/");
  };

  const handleAddToPlanBtn = (id) => {
    const updatedMeal = mealsData.map((item) => {
      if (item.id === id) {
        item.inPlan = true;
      }
      return item;
    });
    setMealsData(updatedMeal);
  };

  const handleRemoveFromPlanBtn = () => {
    console.log("remove from plan");
  };

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="*"
          element={
            <Home
              meals={mealsData}
              handlePlanBtn={handleAddToPlanBtn}
              handleRemoveFromPlanBtn={handleRemoveFromPlanBtn}
            />
          }
        />
        <Route
          exact
          path="/new_meal"
          element={
            <CreateMeal
              meals={mealsData}
              handleAddMealBtn={handleAddMealBtn}
              handleIngridientInput={handleIngridientInput}
              handleAddIngridient={handleAddIngridient}
              inputIngridient={inputIngridient}
              ingridients={ingridients}
              handleIngridientNameInput={handleIngridientNameInput}
              handleCancelMealBtn={handleCancelMealBtn}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
