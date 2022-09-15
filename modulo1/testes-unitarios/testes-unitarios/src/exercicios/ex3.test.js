import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para [1, 2 ,1]", () => {
        const resultado = checaItensDuplicados([1, 2 ,1])

        expect(resultado).toEqual(true)
    });

    test("retorna true para [a, a, b, c]", () => {
        const resultado = checaItensDuplicados(["a", "a", "b", "c"])

        expect(resultado).toEqual(true)
    });

    test("retorna true para [5, 5, 3, 6, 5, 6]", () => {
        const resultado = checaItensDuplicados([5, 5, 3, 6, 5, 6])

        expect(resultado).toEqual(true)
    });

    test("retorna false para [1, 2, 3]", () => {
        const resultado = checaItensDuplicados([1, 2, 3])

        expect(resultado).toEqual(false)
    });
});
