export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const opt = numbers.includes("\\n") ? "\\n" : "\n";
    const parts = numbers.split(opt, 2);
    delimiter = new RegExp(`[${parts[0][2]}]`);
    numbers = parts[1];
  }

  const nums = numbers.split(delimiter).map(Number);

  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}
