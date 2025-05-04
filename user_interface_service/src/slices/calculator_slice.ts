import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LastSessionCalculationResultStore from "../last_session_calculation_expression_store/last_session_calculation_expression_store";
import CalculationResultUpdateAdapter from "../calculation_expression_update_adapter/calculation_expression_update_adapter";
import { CALCULATOR_SLICE_NAME } from "../constants/ui_constants";
import CalculatorCharacters from "../domains/calculator/calculator_characters";
import CalculatorFactory from "../domains/calculator/calculator_factory";
import Calculator from "../domains/calculator/calculator";

let lastSessionCalculationExpression: string;

try {
  lastSessionCalculationExpression =
    LastSessionCalculationResultStore.getExpression();
} catch (error) {
  lastSessionCalculationExpression = "";
}

const calculator: Calculator = CalculatorFactory.getInstance(
  lastSessionCalculationExpression,
);

const calculatorInitialValue: string = calculator.getExpression();

const calculatorSlice = createSlice({
  name: CALCULATOR_SLICE_NAME,
  initialState: { value: calculatorInitialValue },
  reducers: {
    evaluate(state) {
      calculator.evaluate();

      CalculationResultUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        calculator,
        state,
      );
    },

    addCharacter(state, payload: PayloadAction<CalculatorCharacters>) {
      const choseCharacter: CalculatorCharacters = payload.payload;

      calculator.addCharacter(choseCharacter);

      CalculationResultUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        calculator,
        state,
      );
    },

    clean(state) {
      calculator.clean();

      CalculationResultUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        calculator,
        state,
      );
    },

    backspace(state) {
      calculator.backspace();

      CalculationResultUpdateAdapter.updateCalculationExpressionOnKeyValueDatabaseAndUi(
        calculator,
        state,
      );
    },
  },
});

export const { evaluate, addCharacter, backspace, clean } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
