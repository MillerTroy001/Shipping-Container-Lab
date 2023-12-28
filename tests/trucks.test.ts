import { HeavyContainer } from "../src/models/HeavyContainer";
import { LightContainer } from "../src/models/LightContainer";
import { Truck } from "../src/models/Truck";

describe("Trucks class", () => {
  test(`The maxWeight property is set from the constructor parameter.`, () => {
    const truck1: Truck = new Truck(500);
    expect(truck1.maxWeight).toBe(500);
  });
  test(`The container property is set to null in a new Truck instance.`, () => {
    const truck2: Truck = new Truck(500);
    expect(truck2.container).toBe(null);
  });
  test(`Calling addContainer sets the container property.`, () => {
    const truck3: Truck = new Truck(500);
    truck3.addContainer(new LightContainer("Detroit", 500));
    expect(truck3.container).toEqual({
      destination: "Detroit",
      cargoWeight: 500,
    });
  });
  test(`getTotalWeight returns the gross weight of the container when a container is added.`, () => {
    const truck4: Truck = new Truck(500);
    truck4.addContainer(new LightContainer("KalamaDOOMED", 1500));
    const fullWeight = truck4.getTotalWeight();
    expect(fullWeight).toBe(1500);
  });
  test(`getTotalWeight returns the gross weight of the container when a container is added.`, () => {
    const truck5: Truck = new Truck(500);
    truck5.addContainer(new HeavyContainer(500, "AA2", 1500));
    const fullWeight = truck5.getTotalWeight();
    expect(fullWeight).toBe(2000);
  });
  test(`getTotalWeight returns 0 when container is null`, () => {
    const truck6: Truck = new Truck(500);
    const fullWeight = truck6.getTotalWeight();
    expect(fullWeight).toBe(0);
  });
  test(`isOverweight returns true when the total weight is greater than maxWeight.`, () => {
    const truck7: Truck = new Truck(500);
    truck7.addContainer(new LightContainer("KalamaDOOMED", 1500));
    const fullWeight: boolean = truck7.isOverWeight();
    expect(fullWeight).toBe(true);
  });
  test(`isOverweight returns false when the total weight is less than maxWeight.`, () => {
    const truck8: Truck = new Truck(500);
    truck8.addContainer(new LightContainer("KalamaDOOMED", 499));
    const fullWeight: boolean = truck8.isOverWeight();
    expect(fullWeight).toBe(false);
  });
  test(`isOverweight returns false when the total weight is equal to maxWeight.`, () => {
    const truck8: Truck = new Truck(500);
    truck8.addContainer(new LightContainer("KalamaDOOMED", 500));
    const fullWeight: boolean = truck8.isOverWeight();
    expect(fullWeight).toBe(false);
  });
});
