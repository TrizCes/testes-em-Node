import Carrinho from "../carrinho.js";
import Item from '../item.js';

describe('Testes do carrinho', () => {
  it('Carrinho deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });
  it('Carrinho deve salvar os itens', () => {
    const item01 = new Item('Banana', 2, 5);
    const item02 = new Item('Macarrao', 4, 3);

    const carrinho = new Carrinho();
    carrinho.adiciona(item01);
    carrinho.adiciona(item02);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens.length).toBe(2);

    expect(carrinho.itens[0]).toBe(item01);
    expect(carrinho.itens[1]).toBe(item02);

    expect(carrinho.itens).toContain(item01);
  });

  it('deve possuir a propriedade "Total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });
  
})
