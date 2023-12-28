import { HeavyContainer } from "../src/models/HeavyContainer";
import { LightContainer } from "../src/models/LightContainer";
import { Ship } from "../src/models/Ship";

describe("Ship class", () => {
  test(`The maxWeight property is set from the constructor parameter`, () => {
    const ship1: Ship = new Ship(1000);
    expect(ship1.maxWeight).toBe(1000);
  });
  test(`The containers property is set to an empty array in a new Ship instance.`, () => {
    const ship2: Ship = new Ship(1000);
    expect(ship2.containers).toEqual([]);
  });
  test(`Calling addContainer adds to the containers array property.`, () => {
    const ship3: Ship = new Ship(1000);
    ship3.addContainer(new LightContainer("Detroit", 200));
    expect(ship3.containers).toEqual([
      { destination: "Detroit", cargoWeight: 200 },
    ]);
  });
  test(`Calling addContainer twice adds both containers to the containers array property.`, () => {
    const ship4: Ship = new Ship(1000);
    ship4.addContainer(new LightContainer("Detroit", 200));
    ship4.addContainer(new HeavyContainer(100, "Warren", 250));
    expect(ship4.containers).toEqual([
      { destination: "Detroit", cargoWeight: 200 },
      { tareWeight: 100, destination: "Warren", cargoWeight: 250 },
    ]);
  });
  test(`getTotalWeight returns the combined gross weight of the containers in the array.`, () => {
    const ship5: Ship = new Ship(1000);
    ship5.addContainer(new LightContainer("Oakland", 200));
    ship5.addContainer(new HeavyContainer(100, "Compton", 250));
    const totalWeight = ship5.getTotalWeight();
    expect(totalWeight).toBe(550);
  });
  test(`getTotalWeight returns 0 when containers is empty.`, () => {
    const ship6: Ship = new Ship(1000);
    const totalWeight = ship6.getTotalWeight();
    expect(totalWeight).toBe(0);
  });
  test(`isOverweight returns true when the total weight is greater than maxWeight.`, () => {
    const ship7: Ship = new Ship(1000);
    ship7.addContainer(new HeavyContainer(500, "Compton", 650));
    const tooMuchWeight = ship7.isOverWeight();
    expect(tooMuchWeight).toBe(true);
  });
  test(`isOverweight returns false when the total weight is less than maxWeight.`, () => {
    const ship8: Ship = new Ship(1000);
    ship8.addContainer(new HeavyContainer(500, "Compton", 450));
    const tooMuchWeight = ship8.isOverWeight();
    expect(tooMuchWeight).toBe(false);
  });
  test(`isOverweight returns false when the total weight is less than maxWeight.`, () => {
    const ship8: Ship = new Ship(1000);
    ship8.addContainer(new HeavyContainer(500, "Compton", 500));
    const tooMuchWeight = ship8.isOverWeight();
    expect(tooMuchWeight).toBe(false);
  });
});
