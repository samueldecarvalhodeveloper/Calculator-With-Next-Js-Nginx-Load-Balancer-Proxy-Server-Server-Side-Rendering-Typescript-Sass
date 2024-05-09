import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import UiCalculatorCharacters from "../../../../calculator_characters/ui_calculator_characters";
import { EMPTY_STRING } from "../../../../constants/string_utilities_constants";
import Button from "../../../../components/button/button";
import render from "../../../adapters/render";

describe('Test Component: "Button"; Behavior', () => {
  test("Test If Elements Are Rendered And Click Event Is Dispatched Correctly", () => {
    let variableToBeChange: string = EMPTY_STRING;

    const { getByText } = render(
      <Button
        character={UiCalculatorCharacters.ONE}
        className={EMPTY_STRING}
        onClick={() => {
          variableToBeChange = UiCalculatorCharacters.ONE;
        }}
      />,
    );

    const buttonElement: HTMLElement = getByText(UiCalculatorCharacters.ONE);

    fireEvent.click(buttonElement);

    expect(variableToBeChange).toEqual(UiCalculatorCharacters.ONE);
  });
});
