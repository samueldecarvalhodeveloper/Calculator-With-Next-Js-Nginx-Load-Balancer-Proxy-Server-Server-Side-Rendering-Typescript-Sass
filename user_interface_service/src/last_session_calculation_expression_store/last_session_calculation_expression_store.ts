import { LAST_SESSION_CALCULATION_KEY } from "../constants/ui_constants";
import KeyValueStore from "../domains/key_value_store/key_value_store";

class LastSessionCalculationExpressionStore {
  private constructor() {}

  public static getExpression(): string {
    return KeyValueStore.getItem(LAST_SESSION_CALCULATION_KEY).toString();
  }

  public static updateExpression(expression: string): void {
    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, expression);
  }
}

export default LastSessionCalculationExpressionStore;
