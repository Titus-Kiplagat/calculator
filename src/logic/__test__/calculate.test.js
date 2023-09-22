import calculate from '../calculate';

describe('calculate', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      total: null,
      next: null,
      operation: null,
    };
  });

  it('should handle AC button', () => {
    const result = calculate({ ...initialState }, 'AC');
    expect(result).toEqual(initialState);
  });

  it('should handle number input', () => {
    const result = calculate({ ...initialState }, '5');
    expect(result).toEqual({
      total: null,
      next: '5',
    });
  });

  it('should handle adding numbers', () => {
    let state = calculate({ ...initialState }, '5');
    state = calculate(state, '+');
    state = calculate(state, '3');
    state = calculate(state, '=');
    expect(state).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  it('should handle decimal input', () => {
    let state = calculate({ ...initialState }, '5');
    state = calculate(state, '.');
    state = calculate(state, '3');
    expect(state).toEqual({
      total: null,
      next: '5.3',
    });
  });

  it('should handle toggling sign', () => {
    let state = calculate({ ...initialState }, '5');
    state = calculate(state, '+/-');
    expect(state).toEqual({
      total: null,
      next: '-5',
    });
  });

  it('should handle operation after =', () => {
    let state = calculate({ ...initialState }, '5');
    state = calculate(state, '+');
    state = calculate(state, '3');
    state = calculate(state, '=');
    state = calculate(state, '-');
    expect(state).toEqual({
      total: '8',
      next: null,
      operation: '-',
    });
  });

  it('should handle multiple operations', () => {
    let state = calculate({ ...initialState }, '5');
    state = calculate(state, '+');
    state = calculate(state, '3');
    state = calculate(state, '-');
    state = calculate(state, '2');
    state = calculate(state, 'x');
    state = calculate(state, '4');
    state = calculate(state, '÷');
    state = calculate(state, '2');
    state = calculate(state, '=');

    expect(state).toEqual({
      total: '12',
      next: null,
      operation: null,
    });
  });

  it('should handle AC button', () => {
    const result = calculate({ ...initialState }, 'AC');
    expect(result).toEqual(initialState);
  });

  it('should handle toggling sign', () => {
    let state = calculate({ ...initialState }, '5');
    state = calculate(state, '+/-');
    expect(state).toEqual({
      total: null,
      next: '-5',
    });
  });

  it('should handle operation after =', () => {
    let state = calculate({ ...initialState }, '5');
    state = calculate(state, '+');
    state = calculate(state, '3');
    state = calculate(state, '=');
    state = calculate(state, '-');
    expect(state).toEqual({
      total: '8',
      next: null,
      operation: '-',
    });
  });
});
