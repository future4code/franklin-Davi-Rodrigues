import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para arara", () => {
    const resultado = checaPalindromo("arara");

    expect(resultado).toEqual(true);
  });

  test("retorna true para asa", () => {
    const resultado = checaPalindromo("asa");

    expect(resultado).toEqual(true);
  });

  test("retorna true para mirim", () => {
    const resultado = checaPalindromo("mirim");

    expect(resultado).toEqual(true);
  });

  test("retorna false para Socorram-me subi no onibus em marrocos", () => {
    const resultado = checaPalindromo("Socorram-me subi no onibus em marrocos");

    expect(resultado).not.toEqual(true);
  });

  test("retorna false para a cara rajada da jararaca", () => {
    const resultado = checaPalindromo("a cara rajada da jararaca");

    expect(resultado).not.toEqual(true);
  });
});
