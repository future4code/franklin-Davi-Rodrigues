import { Lutador } from "../src/models/Lutador"
import { performAttack } from "../src/performAttack"
import { validateCharacter } from "../src/validateCharacter"

describe("Testes para o Lutador", () => {
    test("Criando mock para quando validateCharacter retorna true", () => {
        const validateCharacterMock = jest.fn(() => {
            return true
        })
    })

    test("Criando mock para quando validateCharacter retorna false", () => {
        const validateCharacterMock = jest.fn(() => {
            return false
        })
    })

    test("Quando o nome é igual a uma string vazia", () => {
        const lutador: Lutador = {
            nome: "",
            vida: 50,
            defesa: 30,
            ataque: 35,
        }

        const result = validateCharacter(lutador)

        expect(result).toEqual(false)
    })

    test("Quando a vida é igual a zero", () => {
        const lutador: Lutador = {
            nome: "Geraldo",
            vida: 0,
            defesa: 20,
            ataque: 15,
        }

        const result = validateCharacter(lutador)

        expect(result).toEqual(false)
    })

    test("Quando o ataque é igual a zero", () => {
        const lutador: Lutador = {
            nome: "Adamastor",
            vida: 100,
            defesa: 80,
            ataque: 0,
        }

        const result = validateCharacter(lutador)

        expect(result).toEqual(false)
    })

    test("Quando a defesa é igual a zero", () => {
        const lutador: Lutador = {
            nome: "Tripa Seca",
            vida: 10,
            defesa: 0,
            ataque: 5,
        }

        const result = validateCharacter(lutador)

        expect(result).toEqual(false)
    })

    test("Quando um dos valores é negativo", () => {
        const lutador: Lutador = {
            nome: "Astrogildo",
            vida: 30,
            defesa: 30,
            ataque: -10,
        }

        const result = validateCharacter(lutador)

        expect(result).toEqual(false)
    })

    test("Quando todos os campos são válidos", () => {
        const lutador: Lutador = {
            nome: "Cabeça de Gelo",
            vida: 150,
            defesa: 120,
            ataque: 200,
        }

        const result = validateCharacter(lutador)

        expect(result).toEqual(true)
    })

    test("Quando um personagem ataca", () => {
        const validateCharacterMock = jest.fn(() => {
            return true
        })

        const attacker: Lutador = {
            nome: "Cabeça de Gelo",
            vida: 800,
            defesa: 200,
            ataque: 400,
        }

        const defender: Lutador = {
            nome: "Tripa Seca",
            vida: 800,
            defesa: 200,
            ataque: 400,
        }

        performAttack(attacker, defender, validateCharacterMock)

        expect(defender.vida).toEqual(600)
        expect(validateCharacterMock).toHaveBeenCalled()
        expect(validateCharacterMock).toHaveBeenCalledTimes(2)
        expect(validateCharacterMock).toHaveReturnedTimes(2)

    })

    test("Quando um personagem ataca e tem uma propriedade inválido", () => {
        const validateCharacterMock = jest.fn(() => {
            return false
        })

        const attacker: Lutador = {
            nome: "Cabeça de Gelo",
            vida: 800,
            defesa: 200,
            ataque: 400,
        }

        const defender: Lutador = {
            nome: "Tripa Seca",
            vida: -800,
            defesa: 200,
            ataque: 400,
        }

        try{
            performAttack(attacker, defender, validateCharacterMock)
        } catch(erro) {
            expect(erro.message).toEqual("Lutador inválido")
            expect(validateCharacterMock).toHaveBeenCalled()
            expect(validateCharacterMock).toHaveBeenCalledTimes(1)
            expect(validateCharacterMock).toHaveReturnedTimes(1)
        }

    })
})

