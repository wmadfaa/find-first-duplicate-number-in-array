export function findFirstDuplicate(a: number[]): number {
  const set = new Set();
  for (const item of a) {
    if (set.has(item)) return item;
    set.add(item);
  }
  return -1;
}
