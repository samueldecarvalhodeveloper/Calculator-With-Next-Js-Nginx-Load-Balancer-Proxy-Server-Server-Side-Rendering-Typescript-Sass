import { NOT_VALID_EXPRESSION_ERROR_MESSAGE } from "../../../constants/domains/calculator/calculation_result_messages_constants";

class CalculatorSpecifications {
  private constructor() {}

  public static isCalculationExpressionEqualToNotValidExpressionExceptionMessage(
    calculationExpression: string,
  ): boolean {
    return calculationExpression === NOT_VALID_EXPRESSION_ERROR_MESSAGE;
  }

  public static isCalculationExpressionEmpty(
    calculationExpression: string,
  ): boolean {
    return calculationExpression === "";
  }

  public static isCalculationExpressionInfinity(calculationExpression: string) {
    return calculationExpression === Infinity.toString();
  }
}

export default CalculatorSpecifications;
