import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import LastSessionCalculationResultStore from "../../last_session_calculation_expression_store/last_session_calculation_expression_store";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../constants/pages/index_page_constants";
import Index from "../../screens/index/index";
import render from "../concerns/react_render_adapter";

describe('Test Integration Of: "Ui Executing Calculation"; Behavior', () => {
  test("Test If I Can Store A Calculation From Ui", () => {
    const { getByTestId, getByText } = render(<Index />);

    const viewFinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );
    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );
    const oneButtonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);

    fireEvent.click(oneButtonElement);

    const firstLastSessionCalculationResultStoreExpression: string =
      LastSessionCalculationResultStore.getExpression();

    expect(firstLastSessionCalculationResultStoreExpression).toEqual(
      UiCalculatorCharacters.ONE,
    );
    expect(viewFinderElement.innerHTML).toEqual(UiCalculatorCharacters.ONE);

    fireEvent.click(cleanButtonElement);

    const secondLastSessionCalculationResultStoreExpression: string =
      LastSessionCalculationResultStore.getExpression();

    expect(secondLastSessionCalculationResultStoreExpression).toEqual("");
    expect(viewFinderElement.innerHTML).toEqual("");
  });
});
