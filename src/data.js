const buy_ingridients = ["meat", "tomato paste", "parmezan", "milk"];
const pantry_ingridients = ["spaghetti", "rice", "shishito pepper"];
export const meals = [
  {
    name: "Spaghetti carbonara",
    ingridients: ["spaghetti", "meat", "parmezan", "tomato paste"],
  },
  {
    name: "Rice with meat",
    ingridients: ["rice", "meat", "souce", "onion", "carrot"],
  },
  {
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
    name: "Spaghetti with shishito peppers",
    ingridients: ["spaghetti", "shishito pepper"],
  },
];

// 1. ["spaghetti", "shishito pepper"] 3 pentry
// 2. [ "rice", "meat", "souce", "onion", "carrot", "shishito peppers"] 2 pentry, 1 buy, 3 non
// 3. ["spaghetti", "meat", "parmezan", "tomato paste"] 1 pentry, and 3 buy
// 4. ["rice", "meat", "souce", "onion", "carrot"] 1 pentry, 1 buy, 3 non
