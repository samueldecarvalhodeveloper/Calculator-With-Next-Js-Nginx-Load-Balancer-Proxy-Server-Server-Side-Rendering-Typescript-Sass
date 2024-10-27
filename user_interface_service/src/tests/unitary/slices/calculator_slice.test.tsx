import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import KeyValueStore from "../../../domains/key_value_store/key_value_store";
import { LAST_SESSION_CALCULATION_KEY } from "../../../constants/ui_constants";
import render from "../../concerns/react_render_adapter";
import UiCalculatorCharacters from "../../../calculator_characters/ui_calculator_characters";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../../constants/pages/index_page_constants";
import Index from "../../../screens/index/index";

describe("Test Module: Calculator Slice; Behavior", () => {
  test("Test If Initial State Is Set", () => {
    const { getByTestId } = render(<Index />);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toBeFalsy();
  });

  test('Test If Reducer: "addCharacter"; Adds Character To Calculation Expression On Ui', () => {
    const { getByText, getByTestId } = render(<Index />);

    const oneButtonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);

    fireEvent.click(oneButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(UiCalculatorCharacters.ONE);
  });

  test('Test If Reducer: "evaluate"; Evaluates Calculation Expression On Ui', () => {
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

  test('Test If Reducer: "clean"; Cleans Calculation Expression On Ui', () => {
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

  test('Test If Reducer: "backspace"; Removes The Last Character From Calculation Expression On Ui', () => {
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

  test("Test If Slice Restores The Stored Last Session Calculation Expression", () => {
    KeyValueStore.setItem(
      LAST_SESSION_CALCULATION_KEY,
      UiCalculatorCharacters.ONE,
    );

    const { getByTestId } = render(<Index />);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(UiCalculatorCharacters.ONE);
  });
});
