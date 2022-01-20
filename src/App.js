import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import CreateMeal from "./components/CreateMeal";
import MealPage from "./components/MealPage";
import { meals } from "./data.js";
import { useState, useEffect } from "react";

function App() {
  const [mealsData, setMealsData] = useState(meals);

  const [mealName, setMealName] = useState("");
  const [currentInputIngridient, setCurrentInputIngridient] = useState("");
  const [ingridientsList, setIngridientsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // storing input name
    localStorage.setItem("mealsData", JSON.stringify(mealsData));
  }, [mealsData]);

  const handleAddIngridientIcon = () => {
    console.log("ingridient added");
    setIngridientsList((prev) => [...prev, currentInputIngridient]);
    setCurrentInputIngridient("");
  };

  function handleIngridientInputChange(e) {
    setCurrentInputIngridient(e.target.value);
  }

  const handleMealNameInput = (e) => {
    setMealName(e.target.value);
  };

  const handleAddMealBtn = () => {
    const lastId = mealsData[mealsData.length - 1].id;
    const newMeal = { name: mealName, ingridientsList, id: lastId + 1 };
    setMealsData((prevMealsData) => [...prevMealsData, newMeal]);
    setIngridientsList([]);
    navigate("/");
  };

  const handleCancelMealBtn = () => {
    setIngridientsList([]);
    currentInputIngridient("");
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
              ingridientsList={ingridientsList}
              handleMealNameInput={handleMealNameInput}
              handleCancelMealBtn={handleCancelMealBtn}
              handleAddIngridientIcon={handleAddIngridientIcon}
              handleIngridientInputChange={handleIngridientInputChange}
              currentInputIngridient={currentInputIngridient}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
