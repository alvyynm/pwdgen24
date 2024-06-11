import "./App.css";
import { useState, useEffect } from "react";
import { LuRectangleVertical } from "react-icons/lu";
import CopyButton from "./components/CopyToClipboard";
import { GeneratePassword } from "./utils/GeneratePassword";
import { CheckPasswordStrength } from "./utils/CheckPasswordStrength";
import useIsInitialMount from "./hooks/useIsInitialMount";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const isInitialMount = useIsInitialMount();

  useEffect(() => {
    if (isInitialMount) {
      // do nothing
    } else {
      setPasswordStrength(CheckPasswordStrength(password));
    }
  }, [password, isInitialMount]);

  // state change functions
  const handleLowercaseCheckboxChange = (event) => {
    setIncludeLowercase(event.target.checked);
  };

  const handleSymbolsCheckboxChange = (event) => {
    setIncludeSymbols(event.target.checked);
  };

  const handleUppercaseCheckboxChange = (event) => {
    setIncludeUppercase(event.target.checked);
  };

  const handleNumbersCheckboxChange = (event) => {
    setIncludeNumbers(event.target.checked);
  };

  const handlePasswordLengthChange = (event) => {
    setPasswordLength(event.target.value);
  };

  const renderStrengthIndicators = () => {
    if (
      passwordStrength === "" ||
      passwordStrength === "WEAK" ||
      passwordStrength === "TOO WEAK"
    ) {
      return (
        <span className="flex flex-row">
          <LuRectangleVertical className="text-sm" />
          <LuRectangleVertical className="text-sm" />
          <LuRectangleVertical className="text-sm" />
          <LuRectangleVertical className="text-sm" />
        </span>
      );
    } else if (passwordStrength === "MEDIUM") {
      return (
        <span className="flex flex-row">
          <LuRectangleVertical className="text-sm text-[#f9cb66]  fill-[#f9cb66]" />
          <LuRectangleVertical className="text-sm text-[#f9cb66]  fill-[#f9cb66]" />
          <LuRectangleVertical className="text-sm text-[#f9cb66]  fill-[#f9cb66]" />
          <LuRectangleVertical className="text-sm" />
        </span>
      );
    } else if (passwordStrength === "STRONG") {
      return (
        <span className="flex flex-row">
          <LuRectangleVertical className="text-sm fill-[#a4ffaf] text-[#a4ffaf]" />
          <LuRectangleVertical className="text-sm fill-[#a4ffaf] text-[#a4ffaf]" />
          <LuRectangleVertical className="text-sm fill-[#a4ffaf] text-[#a4ffaf]" />
          <LuRectangleVertical className="text-sm fill-[#a4ffaf] text-[#a4ffaf]" />
          <LuRectangleVertical className="text-sm fill-[#a4ffaf] text-[#a4ffaf]" />
        </span>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <main className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Password Generator</h1>
        <div className="flex flex-col gap-3 h-[420px] w-[300px]">
          <div className="flex flex-row items-center justify-between gap-10 bg-[#24232a] text-[#4b4a53] hover:text-white h-16 p-3">
            <span className="font-bold text-xl">
              {password ? password : "P4$5W0rD!"}
            </span>
            <CopyButton text={password} />
          </div>
          <div className="bg-[#24232a] flex flex-col gap-3 h-full">
            <div className="flex flex-row items-center justify-between bg-[#24232a] h-12 px-3">
              <span>Character Length</span>
              <span className="text-[#a4ffaf]">{passwordLength}</span>
            </div>
            <div className="px-3">
              <input
                type="range"
                min={5}
                max={20}
                defaultValue={10}
                onChange={handlePasswordLengthChange}
                name="length"
                id="length"
                className="range-input w-full cursor-pointer"
              />
            </div>
            <div className="text-start px-3 flex flex-col gap-2">
              <div>
                <input
                  type="checkbox"
                  name="uppercase"
                  id="uppercase"
                  checked={includeUppercase}
                  onChange={handleUppercaseCheckboxChange}
                  className="mr-3 accent-[#a4ffaf]"
                />
                <label htmlFor="uppercase">Include Uppercase Letters</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="lowercase"
                  id="lowercase"
                  checked={includeLowercase}
                  onChange={handleLowercaseCheckboxChange}
                  className="mr-3 accent-[#a4ffaf]"
                />
                <label htmlFor="lowercase">Include Lowercase Letters</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="numbers"
                  id="numbers"
                  checked={includeNumbers}
                  onChange={handleNumbersCheckboxChange}
                  className="mr-3 accent-[#a4ffaf]"
                />
                <label htmlFor="numbers">Include Numbers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symbols"
                  id="symbols"
                  checked={includeSymbols}
                  onChange={handleSymbolsCheckboxChange}
                  className="mr-3 accent-[#a4ffaf]"
                />
                <label htmlFor="symbols">Include Symbols</label>
              </div>
            </div>
            <div className="px-3">
              <div className="flex flex-row items-center justify-between gap-10 bg-[#18171f] h-12 p-3">
                <span className="font-bold text-[#4b4a53] text-sm">
                  STRENGTH
                </span>
                <span className="font-medium flex flex-row items-center gap-2">
                  {passwordStrength &&
                    (passwordStrength === "TOO WEAK"
                      ? "WEAK"
                      : passwordStrength)}{" "}
                  {renderStrengthIndicators()}
                </span>
              </div>
            </div>
            <div className="px-3">
              <button
                className="bg-[#a4ffaf] border border-[#a4ffaf] text-[#262c25] hover:bg-[#24232a] hover:text-[#a4ffaf] h-10 w-full"
                onClick={() =>
                  setPassword(
                    GeneratePassword(
                      passwordLength,
                      includeLowercase,
                      includeUppercase,
                      includeNumbers,
                      includeSymbols
                    )
                  )
                }
              >
                GENERATE
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
