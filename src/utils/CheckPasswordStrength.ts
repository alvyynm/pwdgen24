type StrengthType = "WEAK" | "MEDIUM" | "STRONG";
export const CheckPasswordStrength = (password: string) => {
  let passwordStrength: StrengthType = "WEAK";
  if (password.length < 7) {
    passwordStrength = "WEAK";
  } else {
    //
    if (new Set(password).size === 1) {
      passwordStrength = "WEAK";
    }
  }
  return passwordStrength;
};
