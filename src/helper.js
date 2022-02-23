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
      id: meal.id,
      name: meal.name,
      ingridients: newIngridients,
      inPlan: meal.inPlan ? meal.inPlan : false,
    };
    newMeals.push(newMeal);
  });
  return newMeals;
}

function isSameCaseInsesitive(s1, s2) {
  if (s1.name && s2.name) {
    return s1.name?.toLowerCase() === s2.name?.toLowerCase();
  } else {
    return s1.toLowerCase() === s2.toLowerCase();
  }
}

export function hasString(array, str) {
  return array.some((item) => isSameCaseInsesitive(item, str));
}

// target => meal ingridients array, searched item array
export function hasAllSearched() {}

export function hasAll(target, search) {
  console.log("has all target: " + target[0].name + ", search: " + search);
  return search.every((s) => hasString(target, s));
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

export const getParamId = (params) => {
  const currentParam = params.id;
  return currentParam;
};
