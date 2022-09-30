import { performPurchase } from "../src"
import { User } from "../src/models/User"

describe("Testes para a função performPurchase", () => {
    test("Testando a função para um caso em que o slado é maior que o valor da compra", () => {
        const user: User = {
            nome: "Astrogildo",
            saldo: 230
        } 

        const result = performPurchase(user, 200)

        expect(result).toEqual({nome: "Astrogildo", saldo: 30})
    })


    test("Testando a função para um caso em que o slado é igual ao valor da compra", () => {
        const user: User = {
            nome: "Astrogildo",
            saldo: 200
        } 

        const result = performPurchase(user, 200)

        expect(result).toEqual({nome: "Astrogildo", saldo: 0})
    })


    test("Testando a função para um caso em que o slado é maior que o valor da compra", () => {
        const user: User = {
            nome: "Astrogildo",
            saldo: 200
        } 

        const result = performPurchase(user, 230)

        expect(result).not.toBeDefined()
    })
})