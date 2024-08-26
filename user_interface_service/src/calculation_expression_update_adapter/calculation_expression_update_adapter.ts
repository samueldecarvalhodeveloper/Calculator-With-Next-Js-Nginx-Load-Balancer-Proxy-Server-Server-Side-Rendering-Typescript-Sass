import LastSessionCalculationExpressionStore from "../last_session_calculation_expression_store/last_session_calculation_expression_store";
import Calculator from "../domains/calculator/calculator";

class CalculationExpressionUpdateAdapter {
  private constructor() {}

  public static updateCalculationExpressionOnKeyValueDatabaseAndUi(
    calculator: Calculator,
    state: {
      value: string;
    },
  ): void {
    const currentCalculationExpression: string = calculator.getExpression();

    state.value = currentCalculationExpression;

    LastSessionCalculationExpressionStore.updateExpression(
      currentCalculationExpression,
    );
  }
}

export default CalculationExpressionUpdateAdapter;
