import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import CreateMeal from "./components/CreateMeal";
import MealPage from "./components/MealPage";
import { meals } from "./data.js";
import { useState, useEffect } from "react";
import EditMeal from "./components/EditMeal";

function App() {
  const [mealsData, setMealsData] = useState(() => {
    const saved = localStorage.getItem("mealsData");
    const initialValue = JSON.parse(saved);
    return initialValue;
  });

  const [mealName, setMealName] = useState("");
  const [currentInputIngridient, setCurrentInputIngridient] = useState("");
  const [ingridientsList, setIngridientsList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("mealsData", JSON.stringify(mealsData));
  }, [mealsData]);

  const handleMealNameInput = (e) => {
    setMealName(e.target.value);
  };

  function handleIngridientInputChange(e) {
    setCurrentInputIngridient(e.target.value);
  }

  const handleAddIngridientIcon = () => {
    console.log("ingridient added");
    setIngridientsList((prev) => [...prev, currentInputIngridient]);
    setCurrentInputIngridient("");
  };

  function handleCreateMealSubmit(event) {
    event.preventDefault();
    const lastId = mealsData[mealsData.length - 1].id;
    const newMeal = {
      name: mealName,
      ingridients: ingridientsList,
      id: lastId + 1,
    };
    setMealsData((prevMealsData) => [...prevMealsData, newMeal]);
    setIngridientsList([]);
    navigate("/");
  }

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

  const onDeleteClick = (id) => {
    const newMealsData = mealsData.filter((meal) => meal.id !== id);
    setMealsData(newMealsData);
    navigate("/");
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
          element={
            <MealPage mealsData={mealsData} onDeleteClick={onDeleteClick} />
          }
        />
        <Route
          exact
          path="/new_meal"
          element={
            <CreateMeal
              meals={mealsData}
              handleFormSubmit={handleCreateMealSubmit}
              ingridientsList={ingridientsList}
              handleMealNameInput={handleMealNameInput}
              handleCancelMealBtn={handleCancelMealBtn}
              handleAddIngridientIcon={handleAddIngridientIcon}
              handleIngridientInputChange={handleIngridientInputChange}
              currentInputIngridient={currentInputIngridient}
            />
          }
        />
        <Route exact path="/meals/:id/edit" element={<EditMeal />} />
      </Routes>
    </div>
  );
}

export default App;
