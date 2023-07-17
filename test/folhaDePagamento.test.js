import { somaHorasExtras, calculaDescontos } from "../index.js";

describe('Calculo de salário: testes', () => {
  it('Deve retornar a somo das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);
  
    expect(retornado).toBe(esperado)
  });
  
  it('Deve retornar com o desconto', () => {
    const esperado = 2200;
    const retornado = calculaDescontos(2500, 300);
  
    expect(retornado).toBe(esperado)
  });
});
