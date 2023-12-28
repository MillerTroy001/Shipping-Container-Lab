// --- findContainerByDestination ---
import {
  lightContainerArray,
  findContainersByDestination,
  mixedUseArray,
  emptyArray,
  truckArray,
  findOverweightTransporters,
  shipsAndTrucks,
  noneOverweight,
  emptyArray2,
  isSafeToAddContainer,
  ship1,
  ship2,
  lastLightContainer,
  lastShip,
  lastHeavyContainer,
} from "../src/functions";

// --- findContainerByDestination ---
console.log(lightContainerArray);
console.log(findContainersByDestination(lightContainerArray, "Detroit"));

console.log(mixedUseArray);
console.log(findContainersByDestination(mixedUseArray, "Royal Oak"));

console.log(findContainersByDestination(mixedUseArray, "Grand Rapids"));
console.log(emptyArray);

// ---findOverweightTransporters---

console.log(truckArray);
console.log(findOverweightTransporters(truckArray));

console.log(shipsAndTrucks);
console.log(findOverweightTransporters(shipsAndTrucks));
console.log(findOverweightTransporters(noneOverweight));
console.log(findOverweightTransporters(emptyArray2));

// --- isSafeToAddCointainer ---
console.log(isSafeToAddContainer(lastShip, lastLightContainer));
console.log(isSafeToAddContainer(ship2, lastHeavyContainer));
console.log(isSafeToAddContainer(ship1, lastLightContainer));
