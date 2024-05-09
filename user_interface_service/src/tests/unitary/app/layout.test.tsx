import { describe, test, expect } from "@jest/globals";
import render from "../../adapters/render";
import Layout from "../../../app/layout";
import Page from "../../../app/page";
import { CALCULATOR_LABEL_TEXT } from "../../constants/ui_constants";

describe('Test Component: "Layout"; Behavior', () => {
  test("Test If Elements Are Rendered Correctly", () => {
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
