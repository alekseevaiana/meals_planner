import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import CreateMeal from "./components/CreateMeal";
import MealPage from "./components/MealPage";
import { meals, allIngridientsData } from "./data.js";
import { useState, useEffect } from "react";
import EditMeal from "./components/EditMeal";
import { Box } from "@mui/system";
import Groceries from "./components/Groceries";
import { getFromStorage } from "./helper";
import { v4 as uuidv4 } from "uuid";
import NavigationLeftPannel from "./components/NavigationLeftPannel";

export function updateMeals(updatedMeal, updater) {
  if (updatedMeal.id) {
    updater((prevMealsData) => {
      const data = [];
      for (const meal of prevMealsData) {
        if (meal.id === updatedMeal.id) {
          data.push(updatedMeal);
        } else {
          data.push(meal);
        }
      }
      return data;
    });
  } else {
    updatedMeal = {
      ...updatedMeal,
      id: uuidv4(),
    };
    updater((prevMealsData) => [updatedMeal, ...prevMealsData]);
  }
}

function App() {
  const [mealsData, setMealsData] = useState(() =>
    getFromStorage("mealsData", meals)
  );

  const [allIngridients, setAllIngridients] = useState(() =>
    getFromStorage("allIngridients", allIngridientsData)
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("mealsData", JSON.stringify(mealsData));
    localStorage.setItem("allIngridients", JSON.stringify(allIngridients));
  }, [mealsData, allIngridients]);

  const storeAddedIngridients = (meal) => {
    meal.ingridients.forEach((mealIngridient) => {
      mealIngridient = mealIngridient.toLowerCase();

      if (!allIngridients.includes(mealIngridient)) {
        setAllIngridients((prev) => [...prev, mealIngridient]);
      }
    });
  };

  const handleMealChange = (updatedMeal) => {
    updateMeals(updatedMeal, setMealsData);
    storeAddedIngridients(updatedMeal);
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
    <Box
      className="App"
      sx={{
        pb: 7,
        width: "100%",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Routes>
        <Route
          exact
          path="*"
          element={
            <Home
              meals={mealsData}
              handlePlanBtn={handleToggleToPlanBtn}
              handleOpenMealBtnClick={handleOpenMealBtnClick}
              allIngridients={allIngridients}
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
          path="/groceries"
          element={
            <Groceries
              mealsData={mealsData}
              onDeleteClick={onDeleteClick}
              allIngridients={allIngridients}
            />
          }
        />
        <Route
          exact
          path="/new_meal"
          element={
            <CreateMeal
              handleMealChange={handleMealChange}
              meals={mealsData}
              allIngridients={allIngridients}
            />
          }
        />
        <Route
          exact
          path="/meals/:id/edit"
          element={
            <EditMeal
              meals={mealsData}
              handleMealChange={handleMealChange}
              allIngridients={allIngridients}
            />
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
