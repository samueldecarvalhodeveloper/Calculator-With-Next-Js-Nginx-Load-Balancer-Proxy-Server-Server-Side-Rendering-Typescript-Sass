import { describe, test, expect } from "@jest/globals";
import LastSessionCalculationResultStore from "../../../last_session_calculation_result_store/last_session_calculation_result_store";
import CalculationResultUpdateAdapter from "../../../calculation_result_update_adapter/calculation_result_update_adapter";
import UiCalculatorCharacters from "../../../calculator_characters/ui_calculator_characters";
import CalculatorTranslatorFactory from "../../../infrastructure/anticorruption_layer.ts/calculator_translator_factory";
import { EMPTY_STRING } from "../../../constants/string_utilities_constants";
import CalculatorTranslator from "../../../infrastructure/anticorruption_layer.ts/calculator_translator";

describe('Test Class: "CalculationResultUpdateAdapter"; Behavior', () => {
  test('Test If Method: "updateCalculationResultOnKeyValueDatabaseAndUi"; Updates The Ui And Key On Key Value Data database Calculation Result With The Latest Calculator Calculation Result Expression Correctly', () => {
    const state = {
      value: EMPTY_STRING,
    };

    const calculatorTranslator: CalculatorTranslator =
      CalculatorTranslatorFactory.getInstance(UiCalculatorCharacters.ONE);

    CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
      calculatorTranslator,
      state,
    );

    const lastSessionCalculationResultStoredExpression: string =
      LastSessionCalculationResultStore.getExpression();

    expect(state.value).toEqual(UiCalculatorCharacters.ONE);
    expect(lastSessionCalculationResultStoredExpression).toEqual(
      UiCalculatorCharacters.ONE,
    );
  });
});
