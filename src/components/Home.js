import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

import { Routes, Route, NavLink } from "react-router-dom";
import MealsList from "./MealsList";
import PlanMealsList from "./PlanMealsList";

const useStyles = makeStyles(() => ({
  headerLinks: {
    display: "flex",
    justifyContent: "center",
    "& a": {
      color: "black",
      textDecoration: "none",
      marginRight: "10px",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    "& .active": {
      borderBottom: "2px solid black",
    },
  },
  linkText: {
    paddingBottom: "10px",
  },
}));

export default function Home({ meals, handlePlanBtn, handleOpenMealBtnClick }) {
  const classes = useStyles();
  const mealsInPlan = meals.filter((meal) => meal.inPlan === true);
  return (
    <>
      <Box
        sx={{
          p: 2,
          mb: 10,
          height: "100vh",
        }}
      >
        <Box className={classes.headerLinks} sx={{ mb: 2 }}>
          <NavLink to="/">
            <Box className={classes.linkText} activeClassName="active">
              Meals
            </Box>
          </NavLink>
          <NavLink to="/plan">
            <Box className={classes.linkText} activeClassName="active">
              Plan
            </Box>
          </NavLink>
        </Box>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MealsList
                meals={meals}
                handlePlanBtn={handlePlanBtn}
                handleOpenMealBtnClick={handleOpenMealBtnClick}
              />
            }
          />
          <Route
            path="/plan"
            element={
              <PlanMealsList
                meals={mealsInPlan}
                handlePlanBtn={handlePlanBtn}
                handleOpenMealBtnClick={handleOpenMealBtnClick}
              />
            }
          />
        </Routes>
      </Box>
    </>
  );
}
