import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../../constants/pages/index_page_constants";
import Index from "../../../screens/index";
import UiCalculatorCharacters from "../../../calculator_characters/ui_calculator_characters";
import render from "../../adapters/render";

describe('Test Hook: "useCalculationResult"; Behavior', () => {
  test('Test If Attribute: "calculationResult"; Return The Calculator Translator Initial Value Correctly', () => {
    const { getByTestId } = render(<Index />);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toBeFalsy();
  });

  test('Test If Method: "addCharacter"; Returns Adds Character To Calculator Translator Calculation Result Correctly', () => {
    const { getByText, getByTestId } = render(<Index />);

    const oneButtonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);

    fireEvent.click(oneButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(UiCalculatorCharacters.ONE);
  });

  test('Test If Method: "evaluate"; Evaluates Expression On Calculator Translator Calculation Result Correctly', () => {
    const { getByText, getByTestId } = render(<Index />);

    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.click(cleanButtonElement);

    const evaluateButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.EVALUATE,
    );
    const oneButtonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);
    const additionButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.ADDITION,
    );

    fireEvent.click(oneButtonElement);
    fireEvent.click(additionButtonElement);
    fireEvent.click(oneButtonElement);
    fireEvent.click(evaluateButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(UiCalculatorCharacters.TWO);
  });

  test('Test If Method: "clean"; Removes All Characters From Calculator Translator Calculation Result Correctly', () => {
    const { getByText, getByTestId } = render(<Index />);

    const oneButtonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);
    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.click(oneButtonElement);
    fireEvent.click(cleanButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toBeFalsy();
  });

  test('Test If Method: "backspace"; Removes Last Character From Calculator Translator Calculation Result Correctly', () => {
    const { getByText, getByTestId } = render(<Index />);

    const oneButtonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);
    const backspaceButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.BACKSPACE,
    );

    fireEvent.click(oneButtonElement);
    fireEvent.click(oneButtonElement);
    fireEvent.click(backspaceButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(UiCalculatorCharacters.ONE);
  });
});
