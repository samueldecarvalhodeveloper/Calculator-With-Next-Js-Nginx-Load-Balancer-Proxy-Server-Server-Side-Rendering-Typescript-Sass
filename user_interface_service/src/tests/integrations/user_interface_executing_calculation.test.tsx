import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../constants/pages/index_page_constants";
import Index from "../../screens/index/index";
import render from "../concerns/react_render_adapter";

describe('Test Integration Of: "Ui Executing Calculation"; Behavior', () => {
  test("Test If I Make A Calculation On Ui", () => {
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
});
