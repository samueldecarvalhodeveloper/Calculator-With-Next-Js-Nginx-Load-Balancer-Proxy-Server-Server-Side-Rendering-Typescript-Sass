import { describe, test, expect } from "@jest/globals";
import UiCalculatorCharacters from "../../../../calculator_characters/ui_calculator_characters";
import render from "../../../concerns/react_render_adapter";
import Calculator from "../../../../components/calculator/calculator";

describe('Test Component: "Calculator"; Behavior', () => {
  test("Test If Elements Are Rendered And Click Event Is Dispatched", () => {
    const calculatorExpression: string =
      UiCalculatorCharacters.ONE +
      UiCalculatorCharacters.ADDITION +
      UiCalculatorCharacters.ONE;

    const { getByText } = render(
      <Calculator value={calculatorExpression}>
        <h1 />
      </Calculator>,
    );

    const calculatorViewfinderElement: HTMLElement =
      getByText(calculatorExpression);

    expect(calculatorViewfinderElement).toBeTruthy();
  });
});
