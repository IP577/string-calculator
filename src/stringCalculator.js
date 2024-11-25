export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/; // Default delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2); // Split the custom delimiter declaration
    delimiter = new RegExp(`[${parts[0][2]}]`); // Extract and convert custom delimiter to regex
    numbers = parts[1]; // Update numbers string
  }

  const nums = numbers.split(delimiter).map(Number); // Split numbers using the delimiter

  const negatives = nums.filter((num) => num < 0); // Find negative numbers
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0); // Calculate the sum
}
