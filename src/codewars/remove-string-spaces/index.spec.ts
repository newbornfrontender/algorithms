import { removeSpaces } from '.';

describe('codewars | remove string spaces (8 kyu)', () => {
  test('should return "88Bi0fk8hB"', () =>
    expect(removeSpaces('    8 8 Bi 0  fk8h B ')).toBe('88Bi0fk8hB'));
  test('should return "8aaaaaddddr"', () =>
    expect(removeSpaces('8aaaaa dddd r     ')).toBe('8aaaaaddddr'));
});
