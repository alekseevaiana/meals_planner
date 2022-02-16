// compare two strings
export function changeIngridients(ingridients) {
  let prevId = 0;
  let newIngridients = [];
  ingridients.forEach((ingridient) => {
    const obj = {
      name: ingridient,
      id: prevId++,
      category: "",
      quantity: 1,
      dimension: "of them",
      notes: "",
      whereToBuy: "",
    };
    newIngridients.push(obj);
  });

  return newIngridients;
}

export function changeAllMealsIngridients(meals) {
  let newMeals = [];
  meals.forEach((meal) => {
    let newIngridients = changeIngridients(meal.ingridients);
    const newMeal = {
      ingridients: newIngridients,
      name: meal.name,
      id: meal.id,
      inPlan: meal.inPlan,
    };
    newMeals.push(newMeal);
  });
  return newMeals;
}

function isSameCaseInsesitive(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}

function hasString(array, str) {
  return array.some((item) => isSameCaseInsesitive(item, str));
}

export function uniqueIngridients(meals) {
  let uniqueIngridients = [];
  meals.forEach((meal) => {
    meal.ingridients.forEach((mIngridient) => {
      if (!hasString(uniqueIngridients, mIngridient)) {
        uniqueIngridients.push(mIngridient);
      }
    });
  });

  return uniqueIngridients;
}

export function getFromStorage(name, defaultValue) {
  const str = localStorage.getItem(name);
  if (!str) {
    return defaultValue;
  }

  try {
    return JSON.parse(str);
  } catch (e) {
    console.warn("Cant parse json: " + name);
    return defaultValue;
  }
}
