import { passwordStrength } from "check-password-strength";

export const CheckPasswordStrength = (password: string) => {
  const strength = passwordStrength(password).value.toUpperCase();
  return strength;
};
