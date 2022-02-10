import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import CreateMeal from "./components/CreateMeal";
import MealPage from "./components/MealPage";
import { meals, allIngridientsData, newMeals } from "./data.js";
import { useState, useEffect } from "react";
import EditMeal from "./components/EditMeal";
import { Box } from "@mui/system";
import Groceries from "./components/Groceries";
import { getFromStorage } from "./helper";

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
    const lastId = mealsData[mealsData.length - 1].id;
    // update old meal
    if (updatedMeal.id) {
      setMealsData((prevMealsData) => {
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
        id: lastId + 1,
      };
      setMealsData((prevMealsData) => [updatedMeal, ...prevMealsData]);
    }
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
        pt: 3,
        width: "100%",
        maxWidth: "400px",
        ml: "auto",
        mr: "auto",
        boxShadow: 3,
      }}
    >
      {console.log("newMeals", newMeals)}
      {console.log("oldMeals: ", mealsData)}
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
