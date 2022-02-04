// compare two strings
function isSameCaseInsesitive(s1, s2) {
  return s1.toLowerCase() === s2.toLowerCase();
}

// if array of ingridients has meal.ingridient => go to next meal
function hasString(array, str) {
  return array.some((v) => isSameCaseInsesitive(v, str));
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
