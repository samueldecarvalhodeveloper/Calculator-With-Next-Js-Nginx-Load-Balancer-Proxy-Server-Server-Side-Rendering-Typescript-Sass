import { describe, test, expect } from "@jest/globals";
import CalculatorFactory from "../../../domains/calculator/calculator_factory";
import Calculator from "../../../domains/calculator/calculator";
import LastSessionCalculationExpressionStore from "../../../last_session_calculation_expression_store/last_session_calculation_expression_store";
import CalculationExpressionUpdateAdapter from "../../../calculation_expression_update_adapter/calculation_expression_update_adapter";
import UiCalculatorCharacters from "../../../calculator_characters/ui_calculator_characters";

describe('Test Class: "CalculationExpressionUpdateAdapter"; Behavior', () => {
  test('Test If Method: "updateCalculationExpressionOnKeyValueDatabaseAndUi"; Updates The Ui And Key On Key Value Data database Calculation Expression With The Latest Calculator Calculation Expression', () => {
    const state = {
      value: "",
    };

    const calculatorTranslator: Calculator = CalculatorFactory.getInstance(
      UiCalculatorCharacters.ONE,
    );

    CalculationExpressionUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
      calculatorTranslator,
      state,
    );

    const lastSessionCalculationExpressionStoredExpression: string =
      LastSessionCalculationExpressionStore.getExpression();

    expect(state.value).toEqual(UiCalculatorCharacters.ONE);
    expect(lastSessionCalculationExpressionStoredExpression).toEqual(
      UiCalculatorCharacters.ONE,
    );
  });
});
