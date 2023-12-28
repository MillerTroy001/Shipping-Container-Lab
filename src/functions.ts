// manuially test functions here with console.log()
import { ShippingContainer } from "./models/ShippingContainer";
import { HeavyContainer } from "./models/HeavyContainer";
import { LightContainer } from "./models/LightContainer";
import { Transporter } from "./models/Transporter";
import { Truck } from "./models/Truck";
import { Ship } from "./models/Ship";

// --- findContainerByDestination ---
const firstContainer: LightContainer = {
  destination: "Detroit",
  cargoWeight: 100,
  getGrossWeight() {
    return this.cargoWeight;
  },
};
const secondContainer: LightContainer = {
  destination: "Warren",
  cargoWeight: 200,
  getGrossWeight() {
    return this.cargoWeight;
  },
};
const thirdContainer: LightContainer = {
  destination: "Hamtramck",
  cargoWeight: 300,
  getGrossWeight() {
    return this.cargoWeight;
  },
};
const fourthContainer: LightContainer = {
  destination: "Detroit",
  cargoWeight: 500,
  getGrossWeight() {
    return this.cargoWeight;
  },
};
export const lightContainerArray: ShippingContainer[] = [
  firstContainer,
  secondContainer,
  thirdContainer,
  fourthContainer,
];

const firstMixedUse: HeavyContainer = {
  tareWeight: 150,
  destination: "Detroit",
  cargoWeight: 1000,
  getGrossWeight() {
    return this.cargoWeight + this.tareWeight;
  },
};
const secondMixedUse: LightContainer = {
  destination: "Ferndale",
  cargoWeight: 100,
  getGrossWeight() {
    return this.cargoWeight;
  },
};
const thirdMixedUse: HeavyContainer = {
  tareWeight: 200,
  destination: "Royal Oak",
  cargoWeight: 500,
  getGrossWeight() {
    return this.cargoWeight + this.tareWeight;
  },
};
const fourthMixedUse: LightContainer = {
  destination: "Royal Oak",
  cargoWeight: 250,
  getGrossWeight() {
    return this.cargoWeight;
  },
};
export const mixedUseArray: ShippingContainer[] = [
  firstMixedUse,
  secondMixedUse,
  thirdMixedUse,
  fourthMixedUse,
];
export const emptyArray: ShippingContainer[] = [];

export const findContainersByDestination = (
  containers: ShippingContainer[],
  destination: string
) => {
  return containers.filter((location) => {
    if (destination === location.destination) {
      return location.destination;
    }
  });
};

// ---findOverweightTransporters---
const truck1: Truck = {
  maxWeight: 1000,
  addContainer(container: ShippingContainer): void {
    this.container = container;
  },
  getTotalWeight(): number {
    if (this.container !== null) {
      return +this.container.getGrossWeight();
    } else {
      return 0;
    }
  },
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  },
  container: null,
};
truck1.addContainer(new LightContainer("Detroit", 500));
const truck2: Truck = {
  maxWeight: 1000,
  addContainer(container: ShippingContainer): void {
    this.container = container;
  },
  getTotalWeight(): number {
    if (this.container !== null) {
      return +this.container.getGrossWeight();
    } else {
      return 0;
    }
  },
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  },
  container: null,
};
truck2.addContainer(new LightContainer("Detroit", 1500));
export const truckArray: Transporter[] = [truck1, truck2];

const mixedTruck1: Truck = {
  maxWeight: 1000,
  addContainer(container: ShippingContainer): void {
    this.container = container;
  },
  getTotalWeight(): number {
    if (this.container !== null) {
      return +this.container.getGrossWeight();
    } else {
      return 0;
    }
  },
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  },
  container: null,
};
mixedTruck1.addContainer(new LightContainer("Detroit", 500));
const mixedTruck2: Truck = {
  maxWeight: 1000,
  addContainer(container: ShippingContainer): void {
    this.container = container;
  },
  getTotalWeight(): number {
    if (this.container !== null) {
      return +this.container.getGrossWeight();
    } else {
      return 0;
    }
  },
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  },
  container: null,
};
mixedTruck2.addContainer(new LightContainer("Detroit", 1500));
export const ship1: Ship = {
  maxWeight: 1000,
  containers: [],
  addContainer(container: ShippingContainer): void {
    this.containers.push(container);
  },
  getTotalWeight(): number {
    let totalWeight = 0;
    if (this.containers !== null) {
      this.containers.forEach((container) => {
        totalWeight += container.getGrossWeight();
      });
    } else {
      return 0;
    }
    return totalWeight;
  },
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  },
};
ship1.addContainer(new LightContainer("Miami", 200));
ship1.addContainer(new LightContainer("Ft. Lauderdale", 250));
ship1.addContainer(new LightContainer("Cape Canaveral", 400));
ship1.getTotalWeight();
export const ship2: Ship = {
  maxWeight: 10000,
  containers: [],
  addContainer(container: ShippingContainer): void {
    this.containers.push(container);
  },
  getTotalWeight(): number {
    let totalWeight = 0;
    if (this.containers !== null) {
      this.containers.forEach((container) => {
        totalWeight += container.getGrossWeight();
      });
    } else {
      return 0;
    }
    return totalWeight;
  },
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  },
};
ship2.addContainer(new LightContainer("Miami", 200));
ship2.addContainer(new LightContainer("Ft. Lauderdale", 250));
ship2.addContainer(new LightContainer("Cape Canaveral", 400));
ship2.getTotalWeight();

export const shipsAndTrucks: Transporter[] = [
  mixedTruck1,
  mixedTruck2,
  ship1,
  ship2,
];
export const noneOverweight: Transporter[] = [mixedTruck1, ship1];
export const emptyArray2: Transporter[] = [];

export const findOverweightTransporters = (transporters: Transporter[]) => {
  return transporters.filter((item) => {
    if (item.isOverWeight() === true) {
      return item;
    }
  });
};

// --- isSafeToAddCointainer ---

export const lastShip: Ship = {
  maxWeight: 5000,
  containers: [],
  addContainer(container: ShippingContainer): void {
    this.containers.push(container);
  },
  getTotalWeight(): number {
    let totalWeight = 0;
    if (this.containers !== null) {
      this.containers.forEach((container) => {
        totalWeight += container.getGrossWeight();
      });
    } else {
      return 0;
    }
    return totalWeight;
  },
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  },
};
export const lastLightContainer: LightContainer = {
  destination: "Detroit",
  cargoWeight: 5000,
  getGrossWeight() {
    return this.cargoWeight;
  },
};

export const lastHeavyContainer: HeavyContainer = {
  tareWeight: 1000,
  destination: "Troy",
  cargoWeight: 1000,
  getGrossWeight(): number {
    return this.tareWeight + this.cargoWeight;
  },
};

export const isSafeToAddContainer = (
  ship: Ship,
  container: ShippingContainer
) => {
  if (ship.getTotalWeight() + container.getGrossWeight() <= ship.maxWeight) {
    return true;
  } else {
    return false;
  }
};

console.log(isSafeToAddContainer(ship1, lastLightContainer));
