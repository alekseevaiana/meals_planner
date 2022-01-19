import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import CreateMeal from "./components/CreateMeal";
import MealPage from "./components/MealPage";
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
    const lastId = mealsData[mealsData.length - 1].id;
    const new_meal = { name: inputIngridientName, ingridients, id: lastId + 1 };
    setMealsData((prevMealsData) => [...prevMealsData, new_meal]);
    setIngridients([]);
    navigate("/");
  };

  const handleCancelMealBtn = () => {
    setIngridients([]);
    setInputIngridientName("");
    navigate("/");
  };

  const handleToggleToPlanBtn = (id) => {
    const updatedMeal = mealsData.map((item) => {
      if (item.id === id) {
        item.inPlan = !item.inPlan;
      }
      return item;
    });
    setMealsData(updatedMeal);
  };

  const handleOpenMealBtnClick = (id) => {
    // navigate to meals/:id
    console.log(`open meal with id ${id}`);
    navigate(`/meals/${id}`);
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
              handlePlanBtn={handleToggleToPlanBtn}
              handleOpenMealBtnClick={handleOpenMealBtnClick}
            />
          }
        />
        <Route
          exact
          path="/meals/:id"
          element={<MealPage mealsData={mealsData} />}
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
