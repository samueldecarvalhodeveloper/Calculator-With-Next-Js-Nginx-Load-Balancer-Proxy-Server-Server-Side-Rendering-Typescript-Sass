import CalculatorTranslator from "../infrastructure/anticorruption_layer.ts/calculator_translator";
import LastSessionCalculationResultStore from "../last_session_calculation_result_store/last_session_calculation_result_store";

class CalculationResultUpdateAdapter {
  private constructor() {}

  public static updateCalculationResultOnKeyValueDatabaseAndUi(
    calculatorTranslator: CalculatorTranslator,
    state: {
      value: string;
    },
  ): void {
    const currentCalculationResult: string =
      calculatorTranslator.getCalculationResult();

    state.value = currentCalculationResult;

    LastSessionCalculationResultStore.updateExpression(
      currentCalculationResult,
    );
  }
}

export default CalculationResultUpdateAdapter;
