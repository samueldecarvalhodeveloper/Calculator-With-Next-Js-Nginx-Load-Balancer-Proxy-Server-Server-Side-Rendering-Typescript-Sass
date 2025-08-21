import { describe, test, expect } from "@jest/globals";
import render from "../../concerns/react_render_adapter";
import Layout from "../../../app/layout";
import Page from "../../../app/page";
import { CALCULATOR_LABEL_TEXT } from "../../constants/ui_constants";

describe('Test Component: "Layout"; Behavior', () => {
  test("Test If Elements Are Rendered", () => {
    const { getByText } = render(
      <Layout>
        <Page />
      </Layout>,
    );

    const calculatorLabelElement: HTMLElement = getByText(
      CALCULATOR_LABEL_TEXT,
    );

    expect(calculatorLabelElement).toBeTruthy();
  });
});
