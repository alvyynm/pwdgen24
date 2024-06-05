import { lowercase, uppercase, numbers, symbols } from "../data";
export const GeneratePassword = (length, ...num) => {
  let generatedPassword = "";
  const options = [uppercase, lowercase, symbols, numbers];
  const generateRandomNumber = (len: number) => Math.floor(Math.random() * len);
  const generateRandomLetter = () => Math.floor(Math.random() * 4);
  for (let i = 0; i < length; i++) {
    const choice = options[generateRandomLetter()];
    generatedPassword += choice[generateRandomNumber(choice.length)];
  }
  return generatedPassword;
};
