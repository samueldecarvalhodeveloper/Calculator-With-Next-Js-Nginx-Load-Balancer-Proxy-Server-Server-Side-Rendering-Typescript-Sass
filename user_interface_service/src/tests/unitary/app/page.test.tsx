import { describe, test, expect } from "@jest/globals";
import { CALCULATOR_LABEL_TEXT } from "../../constants/ui_constants";
import Page from "../../../app/page";
import render from "../../concerns/react_render_adapter";

describe('Test Component: "Page"; Behavior', () => {
  test("Test If Elements Are Rendered", () => {
    const { getByText } = render(<Page />);

    const calculatorLabelElement: HTMLElement = getByText(
      CALCULATOR_LABEL_TEXT,
    );

    expect(calculatorLabelElement).toBeTruthy();
  });
});
