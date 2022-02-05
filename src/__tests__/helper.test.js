import { uniqueIngridients } from "../helper";

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
});
