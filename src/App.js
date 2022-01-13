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
    console.log(e.target.value);
    setInputIngridient(e.target.value);
  };

  const handleIngridientNameInput = (e) => {
    console.log(e.target.value);
    setInputIngridientName(e.target.value);
  };

  const handleAddIngridient = () => {
    const new_ingridient = inputIngridient;
    setIngridients([...ingridients, new_ingridient]);
    setInputIngridient("");
  };

  const handleAddMealBtn = () => {
    const new_meal = { name: inputIngridientName, ingridients };
    setMealsData([...mealsData, new_meal]);
    setIngridients([]);
    navigate("/");
  };

  const handleCancelMealBtn = () => {
    setIngridients([]);
    setInputIngridientName("");
    navigate("/");
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home meals={mealsData} />} />
      </Routes>
      <Routes>
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
