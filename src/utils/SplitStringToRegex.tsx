export const splitStringToRegex = (inputstring: string): string[] => {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(inputstring)) !== null) {
    characters.push(match[0]);
  }

  return characters;
};

// Function to determine if a character index is within the range of a specified word
export const isWithinWordRange = (
  index: number,
  wordStart: number,
  wordLength: number
) => {
  return index >= wordStart && index < wordStart + wordLength;
};
