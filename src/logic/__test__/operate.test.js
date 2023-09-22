import operate from '../operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  it('subtracts two numbers', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });
  it('multiplies two numbers', () => {
    expect(operate(1, 2, 'x')).toBe('2');
  });
  it('divides two numbers', () => {
    expect(operate(1, 2, '÷')).toBe('0.5');
  });
  it('modulos two numbers', () => {
    expect(operate(1, 2, '%')).toBe('1');
  });
  it('throws an error when given an unknown operation', () => {
    expect(() => operate(1, 2, 'unknown')).toThrow();
  });
  it('throws an error when dividing by zero', () => {
    expect(operate(1, 0, '÷')).toBe('Can\'t divide by 0.');
  });
  it('throws an error when modulos by zero', () => {
    expect(operate(1, 0, '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
  it('returns a string', () => {
    expect(typeof operate(1, 2, '+')).toBe('string');
  });
});
