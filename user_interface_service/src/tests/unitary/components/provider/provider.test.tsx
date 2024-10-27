import { describe, test, expect } from "@jest/globals";
import render from "../../../concerns/react_render_adapter";
import Provider from "../../../../components/provider/provider";
import Index from "../../../../screens/index/index";
import { CALCULATOR_LABEL_TEXT } from "../../../constants/ui_constants";

describe('Test Component: "Provider"; Behavior', () => {
  test("Test If Elements Are Rendered", () => {
    const { getByText } = render(
      <Provider>
        <Index />
      </Provider>,
    );

    const calculatorLabelElement: HTMLElement = getByText(
      CALCULATOR_LABEL_TEXT,
    );

    expect(calculatorLabelElement).toBeTruthy();
  });
});
