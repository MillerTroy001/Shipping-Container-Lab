import { LightContainer } from "../src/models/LightContainer";

describe("LightContainer class", () => {
  test(`The destination and cargoWeight properties are set from the constructor parameters.
  `, () => {
    //arrange & act - call constructor(aka: making an object)
    const lightContainer1: LightContainer = new LightContainer("NYC", 100);
    expect(lightContainer1).toEqual({ destination: "NYC", cargoWeight: 100 });
    expect(lightContainer1.destination).toBe("NYC");
    expect(lightContainer1.cargoWeight).toBe(100);
  });
  test(`cargoWeight defaults to 0, when the second constructor parameter is omitted.`, () => {
    //arrange & act - call constructor(aka: making an object)
    const lightContainer2: LightContainer = new LightContainer("Seattle");
    expect(lightContainer2.cargoWeight).toBe(0);
  });
  test(`getGrossWeight returns the cargoWeight (write 2 test cases with different cargoWeights)`, () => {
    //arrange & act - call constructor(aka: making an object)
    const lightContainer3: LightContainer = new LightContainer("Detroit", 300);
    const results: number = lightContainer3.getGrossWeight();
    expect(results).toBe(30);
  });
  test(`getGrossWeight returns the cargoWeight (write 2 test cases with different cargoWeights)`, () => {
    //arrange & act - call constructor(aka: making an object)
    const lightContainer3: LightContainer = new LightContainer("Detroit");
    const results: number = lightContainer3.getGrossWeight();
    expect(results).toBe(0);
  });
});
