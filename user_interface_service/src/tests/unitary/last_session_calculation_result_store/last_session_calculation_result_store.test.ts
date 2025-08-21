import { describe, test, expect } from "@jest/globals";
import { LAST_SESSION_CALCULATION_KEY } from "../../../constants/ui_constants";
import LastSessionCalculationResultStore from "../../../last_session_calculation_expression_store/last_session_calculation_expression_store";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";
import CalculatorCharacters from "../../../domains/calculator/calculator_characters";

describe('Test Class: "LastSessionCalculationResultStore"; Behavior', () => {
  test('Test If Method: "getExpression"; Returns The Last Session Calculation Result From Key Value Database', () => {
    const calculationResult: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, calculationResult);

    const lastSessionCalculationResult: string =
      LastSessionCalculationResultStore.getExpression();

    expect(lastSessionCalculationResult).toEqual(calculationResult);
  });

  test('Test If Method: "updateExpression"; Updates The Calculation Result Expression On Key Value Database', () => {
    const calculationResult: string =
      CalculatorCharacters.ONE +
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.ONE;

    LastSessionCalculationResultStore.updateExpression(calculationResult);

    const calculationResultFromKeyValueDatabase: string = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    ) as string;

    expect(calculationResultFromKeyValueDatabase).toEqual(calculationResult);
  });
});
