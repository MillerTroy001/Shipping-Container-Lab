import { HeavyContainer } from "../src/models/HeavyContainer";

describe("HeavyContainer class", () => {
  test(`The tareWeight, destination, and cargoWeight properties are set from the constructor parameters.`, () => {
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      500,
      "Tuscon",
      1500
    );
    expect(heavyContainer1).toEqual({
      tareWeight: 500,
      destination: "Tuscon",
      cargoWeight: 1500,
    });
  });
  test(`The tareWeight, destination, and cargoWeight properties are set from the constructor parameters.`, () => {
    const heavyContainer2: HeavyContainer = new HeavyContainer(
      750,
      "Los Angeles"
    );
    expect(heavyContainer2).toEqual({
      tareWeight: 750,
      destination: "Los Angeles",
      cargoWeight: 0,
    });
  });
  test(`getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)`, () => {
    const heavyContainer3: HeavyContainer = new HeavyContainer(
      600,
      "Atlanta",
      5000
    );
    const fullWeight = heavyContainer3.getGrossWeight();
    expect(fullWeight).toBe(5600);
  });
  test(`getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)`, () => {
    const heavyContainer3: HeavyContainer = new HeavyContainer(600, "Atlanta");
    const fullWeight = heavyContainer3.getGrossWeight();
    expect(fullWeight).toBe(600);
  });
});
