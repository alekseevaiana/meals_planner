import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import CreateMeal from "./components/CreateMeal";
import MealPage from "./components/MealPage";
import { meals } from "./data.js";
import { useState, useEffect } from "react";
import EditMeal from "./components/EditMeal";
import { Box } from "@mui/system";

function App() {
  const [mealsData, setMealsData] = useState(() => {
    const saved = localStorage.getItem("mealsData");
    if (saved) {
      const initialValue = JSON.parse(saved);
      return initialValue;
    } else {
      return meals;
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("mealsData", JSON.stringify(mealsData));
  }, [mealsData]);

  const handleMealChange = (updatedMeal) => {
    const lastId = mealsData[mealsData.length - 1].id;
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
      console.log("there is not id");
      updatedMeal = {
        ...updatedMeal,
        id: lastId + 1,
      };
      setMealsData((prevMealsData) => [...prevMealsData, updatedMeal]);
    }
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
    <Box className="App" sx={{ pb: 7, pt: 3 }}>
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
            <CreateMeal handleMealChange={handleMealChange} meals={mealsData} />
          }
        />
        <Route
          exact
          path="/meals/:id/edit"
          element={
            <EditMeal meals={mealsData} handleMealChange={handleMealChange} />
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
