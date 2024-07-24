import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../constants/pages/index_page_constants";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import Index from "../../screens/index/index";
import render from "../concerns/react_render_adapter";

describe('Test Component: "Calculator"; Behavior', () => {
  test("Test If Component Handles Calculation On Home Screen Calculator Scenario Correctly", () => {
    const { getByText, getByTestId } = render(<Index />);

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

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(CalculatorCharacters.TWO);
  });
});
