import Item from '../item.js';

describe('Testes da biblioteca de itens', () => {
  it('deve ter 3 campos: nome, valor, quantidade', () => {
    const item = new Item('Beterraba', 2.5, 10);
    
    expect(item.nome).toBe('Beterraba');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('deve ter preço calculado proporcionalmente a quantidade', () => {
    const item = new Item('Batata', 5.25, 10);
    
    expect(item.pegaValorTotalItem()).toBeCloseTo(52.5);
  });
});
