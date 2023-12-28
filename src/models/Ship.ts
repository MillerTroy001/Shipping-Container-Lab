import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";

export class Ship implements Transporter {
  maxWeight: number;
  containers: ShippingContainer[];
  constructor(maxWeight: number) {
    this.maxWeight = maxWeight;
    this.containers = [];
  }
  addContainer(container: ShippingContainer): void {
    this.containers.push(container);
  }
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
  }
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  }
}
