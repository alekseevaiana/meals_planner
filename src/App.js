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
    const savedMealsData = localStorage.getItem("mealsData");

    if (savedMealsData) {
      const initialValue = JSON.parse(savedMealsData);
      return initialValue;
    } else {
      return meals;
    }
  });

  const [allIngridients, setAllIngridients] = useState(() => {
    const savedAllIngridients = localStorage.getItem("allIngridients");
    if (savedAllIngridients) {
      const initialValue = JSON.parse(savedAllIngridients);
      return initialValue;
    } else {
      return allIngridients;
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("mealsData", JSON.stringify(mealsData));
    localStorage.setItem("allIngridients", JSON.stringify(allIngridients));
  }, [mealsData, allIngridients]);

  const handleNewToAllIngridients = (meal) => {
    meal.ingridients.forEach((mealIngridient) => {
      mealIngridient = mealIngridient.toLowerCase();
      if (!allIngridients.includes(mealIngridient)) {
        console.log("NEW INGRIDIENT");
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
      setMealsData((prevMealsData) => [...prevMealsData, updatedMeal]);
    }
    handleNewToAllIngridients(updatedMeal);
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
