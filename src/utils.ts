
export function wordCount(s: string) {
  const pattern = /\S+/g;
  let count = 0;
  while (pattern.exec(s)) count++;
  return count;
}
