import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LastSessionCalculationResultStore from "@/last_session_calculation_result_store/last_session_calculation_result_store";
import CalculationResultUpdateAdapter from "../calculation_result_update_adapter/calculation_result_update_adapter";
import { EMPTY_STRING } from "../constants/string_utilities_constants";
import { CALCULATOR_SLICE_NAME } from "../constants/ui_constants";
import CalculatorTranslator from "../infrastructure/anticorruption_layer.ts/calculator_translator";
import CalculatorTranslatorFactory from "../infrastructure/anticorruption_layer.ts/calculator_translator_factory";
import CalculatorCharacters from "../domains/calculator/calculator_characters";

let lastSessionCalculationExpression: string;

try {
  lastSessionCalculationExpression =
    LastSessionCalculationResultStore.getExpression();
} catch (error) {
  lastSessionCalculationExpression = EMPTY_STRING;
}

const calculatorTranslator: CalculatorTranslator =
  CalculatorTranslatorFactory.getInstance(lastSessionCalculationExpression);

const calculatorTranslatorInitialValue: string =
  calculatorTranslator.getCalculationResult();

const calculatorSlice = createSlice({
  name: CALCULATOR_SLICE_NAME,
  initialState: { value: calculatorTranslatorInitialValue },
  reducers: {
    evaluate(state) {
      calculatorTranslator.evaluate();

      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        calculatorTranslator,
        state,
      );
    },

    addCharacter(state, payload: PayloadAction<CalculatorCharacters>) {
      const choseCharacter: CalculatorCharacters = payload.payload;

      calculatorTranslator.addCharacter(choseCharacter);

      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        calculatorTranslator,
        state,
      );
    },

    clean(state) {
      calculatorTranslator.clean();

      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        calculatorTranslator,
        state,
      );
    },

    backspace(state) {
      calculatorTranslator.backspace();

      CalculationResultUpdateAdapter.updateCalculationResultOnKeyValueDatabaseAndUi(
        calculatorTranslator,
        state,
      );
    },
  },
});

export const { evaluate, addCharacter, backspace, clean } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
