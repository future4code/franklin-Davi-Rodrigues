import React from "react";
import { getByLabelText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("Home Page tests", () => {
  test("Indicador de quantidade de produtos começa em 3", () => {
    const {getByText} = render(<App />)
    const qtdProdutos = getByText(/Quantidade de produtos: /i)

    expect(qtdProdutos).toHaveTextContent(/Quantidade de produtos: 3/i)
  
  });

  test("Sem valor mínimo, há quatro produtos, e isso é indicado corretamente", async () => {
    const {getByLabelText, getByText} = render(<App />)

    const filtroMinimo = getByLabelText("Filtro Mínimo:")
    userEvent.clear(filtroMinimo)

    const qtdProdutos = getByText(/Quantidade de produtos: /i)

    expect(qtdProdutos).toHaveTextContent(/Quantidade de produtos: 4/i)


    expect()
    
  });

  test.skip("Filtro de busca por nome funciona, e encontra produto com 'legal' no nome", () => {
    const { getAllByText, getByLabelText } = render(<App />);
    const filtroNome = getByLabelText("Busca por nome:");
    userEvent.type(filtroNome, "legal");
    const produtos = getAllByText(/Produto /);
    expect(produtos).toHaveLength(1);
  });

  test.skip("Ordenação decrescente garante produto de preço maior na frente.", () => {
    const { getAllByText, getByLabelText, getByText } = render(<App />);
    const ordenacaoSelect = getByLabelText(/Ordenação:/);
    userEvent.selectOptions(ordenacaoSelect, getByText(/Decrescente/));
    const [primeiro, segundo] = getAllByText(/R\$/);
    const precoPrimeiro = Number(
      primeiro.textContent.split(" ")[1].split(",")[0]
    );
    const precoSegundo = Number(
      segundo.textContent.split(" ")[1].split(",")[0]
    );
    expect(precoPrimeiro).toBeGreaterThan(precoSegundo);
  });

  test("Ao adicionar no carrinho o preço fica correto", () => {
    const {getAllByText, getByText} = render(<App />)
    const botoes = getAllByText(/Adicionar carrinho/i)
    userEvent.click(botoes[0])
    userEvent.click(botoes[1])
    userEvent.click(botoes[2])

    const valorTotal = getByText(/Valor total:/i)
    console.log(valorTotal)

    expect(valorTotal).toHaveTextContent("Valor total: R$ 353,00")


  })

  test("Verifica se existe um botão de remover para cada produto no carrinho", () => {
    const {getAllByText} = render(<App />)
    const botoesAdd = getAllByText(/Adicionar carrinho/i)
    userEvent.click(botoesAdd[0])
    userEvent.click(botoesAdd[1])
    userEvent.click(botoesAdd[2])

    const botoesRemover = getAllByText(/Remover/i)

    expect(botoesRemover.length).toBe(3)

  })
});
