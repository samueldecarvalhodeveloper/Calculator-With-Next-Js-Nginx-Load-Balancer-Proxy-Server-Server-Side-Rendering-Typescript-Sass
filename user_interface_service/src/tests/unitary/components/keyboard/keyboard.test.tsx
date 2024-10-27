import { describe, test, expect } from "@jest/globals";
import CalculatorCharacters from "../../../../domains/calculator/calculator_characters";
import render from "../../../concerns/react_render_adapter";
import Keyboard from "../../../../components/keyboard/keyboard";

describe('Test Component: "Keyboard"; Behavior', () => {
  test("Test If Elements Are Rendered", () => {
    const { getByText } = render(
      <Keyboard>
        <h1>{CalculatorCharacters.ONE}</h1>
      </Keyboard>,
    );

    const calculatorChildElement: HTMLElement = getByText(
      CalculatorCharacters.ONE,
    );

    expect(calculatorChildElement).toBeTruthy();
  });
});
