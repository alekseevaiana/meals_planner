import {
  uniqueIngridients,
  changeIngridients,
  changeAllMealsIngridients,
} from "../helper";

describe("Helper", () => {
  test("Function should return array of unique elements", async () => {
    const objArr = [
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
    ];

    const expectedResult = [
      "spaghetti",
      "meat",
      "parmezan",
      "tomato paste",
      "rice",
      "souce",
      "onion",
      "carrot",
    ];
    const result = uniqueIngridients(objArr);
    expect(result).toEqual(expectedResult);
  });

  test("Function should return empty array", async () => {
    const objArr = [];
    const expectedResult = [];
    const result = uniqueIngridients(objArr);
    expect(result).toEqual(expectedResult);
  });

  test("Function changeIngridients should change array data structure", async () => {
    const oldArray = ["Ground beef", "Rice"];
    const expectedArray = [
      {
        name: "Ground beef",
        id: 0,
        category: "",
        quantity: 1,
        dimension: "of them",
        notes: "",
        whereToBuy: "",
      },
      {
        name: "Rice",
        id: 1,
        category: "",
        quantity: 1,
        dimension: "of them",
        notes: "",
        whereToBuy: "",
      },
    ];

    const result = changeIngridients(oldArray);
    expect(result).toEqual(expectedArray);
  });

  test("function changeAllMealsIngridients should return updated ", async () => {
    const oldData = [
      {
        id: 1,
        name: "Spaghetti carbonara",
        ingridients: ["Ground beef", "Rice"],
        inPlan: true,
      },
      {
        id: 2,
        name: "Rice with meat",
        ingridients: ["Ground beef", "Rice"],
      },
    ];
    const expectedData = [
      {
        id: 1,
        name: "Spaghetti carbonara",
        ingridients: [
          {
            name: "Ground beef",
            id: 0,
            category: "",
            quantity: 1,
            dimension: "of them",
            notes: "",
            whereToBuy: "",
          },
          {
            name: "Rice",
            id: 1,
            category: "",
            quantity: 1,
            dimension: "of them",
            notes: "",
            whereToBuy: "",
          },
        ],
        inPlan: true,
      },
      {
        id: 2,
        name: "Rice with meat",
        ingridients: [
          {
            name: "Ground beef",
            id: 0,
            category: "",
            quantity: 1,
            dimension: "of them",
            notes: "",
            whereToBuy: "",
          },
          {
            name: "Rice",
            id: 1,
            category: "",
            quantity: 1,
            dimension: "of them",
            notes: "",
            whereToBuy: "",
          },
        ],
      },
    ];

    const result = changeAllMealsIngridients(oldData);
    expect(result).toEqual(expectedData);
  });
});
