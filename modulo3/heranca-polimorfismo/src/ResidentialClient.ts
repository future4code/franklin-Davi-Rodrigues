import { Residence } from "./Place";
import { Client } from "./Client";
export class ResidentialClient extends Residence implements Client{
    constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    residentsQuantity: number,
    cep: string,
    private cpf: string
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}