import { lowercase, uppercase, numbers, symbols } from "../data";
export const GeneratePassword = (length: number, ...num: boolean[]) => {
  let generatedPassword = "";
  let charSet = "";
  if (num[0]) {
    charSet += lowercase;
  }
  if (num[1]) {
    charSet += uppercase;
  }
  if (num[2]) {
    charSet += numbers;
  }
  if (num[3]) {
    charSet += symbols;
  }
  const generateRandomNumber = (len: number) => Math.floor(Math.random() * len);
  for (let i = 0; i < length; i++) {
    const randomIndex = generateRandomNumber(charSet.length);
    generatedPassword += charSet.charAt(randomIndex);
  }
  return generatedPassword;
};
