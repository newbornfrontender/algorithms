import { binarySearch } from '.';

const list: number[] = [1, 3, 4, 5, 8, 21];

describe('grokking algorithms | binary search', () => {
  test('searched position must be 1', () => expect(binarySearch(list, 3)).toBe(1));
  test('searched position must be 4', () => expect(binarySearch(list, 8)).toBe(4));
  test('searched position must be null', () => expect(binarySearch(list, -1)).toBe(null));
});
