const buy_ingridients = ["meat", "tomato paste", "parmezan", "milk"];
const pantry_ingridients = ["spaghetti", "rice", "shishito pepper"];

// meal.ingridients.forEach((mealIngridient) => {
//   mealIngridient = mealIngridient.toLowerCase();
//   if (!allIngridients.includes(mealIngridient)) {
//     setAllIngridients((prev) => [...prev, mealIngridient]);
//   }
// });

// const getAllIngridients = (meals) => {
//   let allIngridients = [];
//   meals.forEach(meal => {
//     meal.ingridients.forEach(ingridient => {
//       allIngridients.forEach(item => {
//         if (ingridient )
//       })
//     })
//   })

// };

export const meals = [
  {
    id: 1,
    name: "Spaghetti carbonara",
    ingridients: ["spaghetti", "meat", "parmezan", "tomato paste"],
    inPlan: true,
  },
  {
    id: 2,
    name: "Rice with meat",
    ingridients: ["rice", "meat", "souce", "onion", "carrot"],
  },
  {
    id: 3,
    name: "Rice with shishito peppers and meat",
    ingridients: [
      "rice",
      "meat",
      "souce",
      "onion",
      "carrot",
      "shishito peppers",
    ],
  },
  {
    id: 4,
    name: "Spaghetti with shishito peppers",
    ingridients: ["spaghetti", "shishito pepper"],
  },
  {
    id: 5,
    name: "Spanish-Style Beef & Vegetables",
    ingridients: [
      "Ground Beef",
      "Zucchini",
      "Yellow Onion",
      "Sliced Roasted Red Peppers",
      "Preserved Lemon Purée",
      "Dried Medjool Dates",
      "Mayonnaise",
      "Spanish Spice Blend",
    ],
  },
  {
    id: 6,
    name: "Pork Chorizo, Potato & Fig Bake",
    ingridients: [
      "Pork Chorizo",
      "Potatoes",
      "Sweet Peppers",
      "Dried Turkish Figs",
      "Mayonnaise",
      "Preserved Lemon Purée",
    ],
  },
  {
    id: 7,
    name: "Romesco Beef & Poblano Pepper",
    ingridients: [
      "Ground Beef",
      "Poblano Pepper",
      "Red Onion",
      "Romesco Sauce",
      "Castelvetrano Olives",
      "Tomato Paste",
    ],
    inPlan: true,
  },
  {
    id: 8,
    name: "Pan-Seared Cod",
    ingridients: [
      "Cod Fillets",
      "Arugula",
      "Lemon",
      "Potatoes",
      "Sliced Roasted Almonds",
      "Butter",
      "Honey",
      "Smoky Spice Blend",
      "Red Onion",
    ],
  },
  {
    id: 9,
    name: "Smoky Guajillo Beef & Rice Bowls",
    ingridients: [
      "Ground Beef",
      "Grape Tomatoes",
      "Lime",
      "Carrots",
      "Mayonnaise",
      "Grated Cotija Cheese",
      "Guajillo Chile Pepper Sauce",
      "Mexican Spice Blend",
    ],
  },
  {
    id: 10,
    name: "Spanish-Spiced Salmon & Veggie Quinoa",
    ingridients: [
      "Skin-On Salmon Fillets",
      "Red Quinoa",
      "Lemon",
      "Zucchini",
      "Carrots",
      "Dried Medjool Dates",
      "Sliced Roasted Red Peppers",
      "Spanish Spice Blend",
      "Crushed Red Pepper Flakes",
    ],
  },
  {
    id: 11,
    name: "Calabrian Beef & Gnocchi",
    ingridients: [
      "Ground Beef",
      "Gnocchi",
      "Garlic",
      "Zucchini",
      "Tomato Paste",
      "Mascarpone Cheese",
      "Calabrian Chile Paste",
      "Grated Romano Cheese",
    ],
  },
  {
    id: 12,
    name: "Shawarma-Spiced Cod & Arugula Salad",
    ingridients: [
      "Cod Fillets",
      "Potatoes",
      "Arugula",
      "Kohlrabi",
      "Lemon",
      "Dried Currants",
      "Tahini",
      "Roasted Pistachios",
      "Sweety Drop Peppers",
      "Whole Dried Oregano",
      "Shawarma Spice Blend",
    ],
  },
  {
    id: 13,
    name: "Spicy Pork Sausage Pasta",
    ingridients: [
      "Hot Italian Pork Sausage",
      "Orecchiette Pasta",
      "Grape Tomatoes",
      "Corn",
      "Grated Romano Cheese",
      "Calabrian Chile Paste",
      "Mascarpone Cheese",
    ],
  },
  {
    id: 14,
    name: "Italian Beef & Pesto Rice",
    ingridients: [
      "Ground Beef",
      "Long Grain White Rice",
      "Sweet Peppers",
      "Garlic",
      "Zucchini",
      "Basil Pesto",
      "Capers",
      "Apple Cider Vinegar",
      "Crushed Red Pepper Flakes",
      "Italian Seasoning ",
    ],
  },
];

export const allIngridientsData = [];

// 1. ["spaghetti", "shishito pepper"] 3 pentry
// 2. [ "rice", "meat", "souce", "onion", "carrot", "shishito peppers"] 2 pentry, 1 buy, 3 non
// 3. ["spaghetti", "meat", "parmezan", "tomato paste"] 1 pentry, and 3 buy
// 4. ["rice", "meat", "souce", "onion", "carrot"] 1 pentry, 1 buy, 3 non
