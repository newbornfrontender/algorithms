export const binarySearch = <T>(list: T[], item: T): number | null => {
  let low = 0;
  let high: number = list.length - 1;

  while (low <= high) {
    const mid: number = Math.floor((low + high) / 2);
    const guess: T = list[mid];

    if (guess === item) return mid;
    if (guess > item) high = mid - 1;
    if (guess < item) low = mid + 1;
  }

  return null;
};
