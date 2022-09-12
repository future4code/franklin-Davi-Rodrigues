import { Client } from "./Client";
import { Industry } from "./Place";

export class CommercialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private ri: string,
        machinesQuantity: number,
        cep: string,
    ){super(machinesQuantity, cep)}

    public getRi(): string {
        return this.ri
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

}