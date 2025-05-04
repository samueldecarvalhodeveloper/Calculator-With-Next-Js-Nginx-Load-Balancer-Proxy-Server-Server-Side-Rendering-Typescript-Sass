import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import LastSessionCalculationResultStore from "@/last_session_calculation_expression_store/last_session_calculation_expression_store";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../constants/pages/index_page_constants";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import Index from "../../screens/index/index";
import render from "../concerns/react_render_adapter";

describe("Test System Behavior", () => {
  test("Test If System Handles A Calculator Calculation In User Interface", () => {
    const { getByText, getByTestId } = render(<Index />);

    const viewFinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewFinderElement.innerHTML).toBeFalsy();

    const oneButtonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);
    const additionButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.ADDITION,
    );
    const evaluateButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.EVALUATE,
    );

    fireEvent.click(oneButtonElement);
    fireEvent.click(additionButtonElement);
    fireEvent.click(oneButtonElement);
    fireEvent.click(evaluateButtonElement);

    expect(viewFinderElement.innerHTML).toEqual(UiCalculatorCharacters.TWO);

    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.click(cleanButtonElement);

    expect(viewFinderElement.innerHTML).toBeFalsy();
  });

  test("Test If System Handles A Calculator Calculation Expression Storing In User Interface", () => {
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
