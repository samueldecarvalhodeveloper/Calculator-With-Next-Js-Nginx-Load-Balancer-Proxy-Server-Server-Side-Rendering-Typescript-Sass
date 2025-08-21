import { describe, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import UiCalculatorCharacters from "../../../../calculator_characters/ui_calculator_characters";
import Button from "../../../../components/button/button";
import render from "../../../concerns/react_render_adapter";

describe('Test Component: "Button"; Behavior', () => {
  test("Test If Elements Are Rendered And Click Event Is Dispatched", () => {
    let variableToBeChange: string = "";

    const { getByText } = render(
      <Button
        character={UiCalculatorCharacters.ONE}
        className=""
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
