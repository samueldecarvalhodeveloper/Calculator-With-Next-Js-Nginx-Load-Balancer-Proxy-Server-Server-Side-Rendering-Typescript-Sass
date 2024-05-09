import CalculatorCharacters from "../../domains/calculator/calculator_characters";

export const STRING_WITHOUT_LAST_CHARACTER: string =
  CalculatorCharacters.ONE + CalculatorCharacters.ADDITION;

export const STRING_WITH_ALL_CHARACTER: string =
  CalculatorCharacters.ONE +
  CalculatorCharacters.ADDITION +
  CalculatorCharacters.ONE;
