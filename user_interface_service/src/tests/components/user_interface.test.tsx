import { describe, beforeEach, test, expect } from "@jest/globals";
import { fireEvent } from "@testing-library/react";
import CalculatorFactory from "../../domains/calculator/calculator_factory";
import Calculator from "../../domains/calculator/calculator";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../constants/pages/index_page_constants";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import { CALCULATOR_LABEL_TEXT } from "../constants/ui_constants";
import render from "../concerns/react_render_adapter";
import Index from "../../screens/index/index";

describe('Test Component: "UserInterface"; Behavior', () => {
  const calculatorTranslator: Calculator = CalculatorFactory.getInstance("");

  beforeEach(() => {
    calculatorTranslator.clean();
  });

  test("Test Elements Rendering", () => {
    const { getByText } = render(<Index />);

    const calculatorLabelElement = getByText(CALCULATOR_LABEL_TEXT);

    expect(calculatorLabelElement).toBeTruthy();
  });

  test("Test Calculator Expression Being Placed On Calculator Viewfinder State", () => {
    const { getByTestId } = render(<Index />);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toBeFalsy();
  });

  test("Test Clean Button Cleaning Calculator Expression", () => {
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);
    calculatorTranslator.addCharacter(CalculatorCharacters.ADDITION);
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    const { getByText, getByTestId } = render(<Index />);

    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.click(cleanButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toBeFalsy();
  });

  test("Test Backspace Button Backspacing Calculator Expression", () => {
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    const { getByText, getByTestId } = render(<Index />);

    const backspaceButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.BACKSPACE,
    );

    fireEvent.click(backspaceButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toBeFalsy();
  });

  test("Test Evaluate Button Evaluating Calculator Expression", () => {
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);
    calculatorTranslator.addCharacter(CalculatorCharacters.ADDITION);
    calculatorTranslator.addCharacter(CalculatorCharacters.ONE);

    const { getByText, getByTestId } = render(<Index />);

    const evaluateButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.EVALUATE,
    );

    fireEvent.click(evaluateButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(CalculatorCharacters.TWO);
  });

  test("Test Numerical Buttons Adding Number Characters On Calculator Expression", () => {
    const { getByText, getByTestId } = render(<Index />);

    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.click(cleanButtonElement);

    const expressionWithAllNumberCharacters: string =
      CalculatorCharacters.ZERO +
      CalculatorCharacters.ONE +
      CalculatorCharacters.TWO +
      CalculatorCharacters.THREE +
      CalculatorCharacters.FOUR +
      CalculatorCharacters.FIVE +
      CalculatorCharacters.SIX +
      CalculatorCharacters.SEVEN +
      CalculatorCharacters.EIGHT +
      CalculatorCharacters.NINE;

    const zeroButtonElement: HTMLElement = getByText(CalculatorCharacters.ZERO);
    const oneButtonElement: HTMLElement = getByText(CalculatorCharacters.ONE);
    const twoButtonElement: HTMLElement = getByText(CalculatorCharacters.TWO);
    const threeButtonElement: HTMLElement = getByText(
      CalculatorCharacters.THREE,
    );
    const fourButtonElement: HTMLElement = getByText(CalculatorCharacters.FOUR);
    const fiveButtonElement: HTMLElement = getByText(CalculatorCharacters.FIVE);
    const sixButtonElement: HTMLElement = getByText(CalculatorCharacters.SIX);
    const sevenButtonElement: HTMLElement = getByText(
      CalculatorCharacters.SEVEN,
    );
    const eightButtonElement: HTMLElement = getByText(
      CalculatorCharacters.EIGHT,
    );
    const nineButtonElement: HTMLElement = getByText(CalculatorCharacters.NINE);

    fireEvent.click(zeroButtonElement);
    fireEvent.click(oneButtonElement);
    fireEvent.click(twoButtonElement);
    fireEvent.click(threeButtonElement);
    fireEvent.click(fourButtonElement);
    fireEvent.click(fiveButtonElement);
    fireEvent.click(sixButtonElement);
    fireEvent.click(sevenButtonElement);
    fireEvent.click(eightButtonElement);
    fireEvent.click(nineButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(
      expressionWithAllNumberCharacters,
    );
  });

  test("Test Symbol Buttons Adding Symbol Characters On Calculator Expression", () => {
    const { getByText, getByTestId } = render(<Index />);

    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.click(cleanButtonElement);

    const expressionWithAllSymbolCharacters: string =
      CalculatorCharacters.POINT;

    const pointButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.POINT,
    );

    fireEvent.click(pointButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(
      expressionWithAllSymbolCharacters,
    );
  });

  test("Test Operator Buttons Adding Operator Characters On Calculator Expression", () => {
    const { getByText, getByTestId } = render(<Index />);

    const cleanButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.CLEAN,
    );

    fireEvent.click(cleanButtonElement);

    const expressionWithAllOperatorsCharacters: string =
      CalculatorCharacters.ADDITION +
      CalculatorCharacters.DIVISION +
      CalculatorCharacters.MULTIPLICATION +
      CalculatorCharacters.SUBTRACTION;

    const additionButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.ADDITION,
    );
    const divisionButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.DIVISION,
    );
    const subtractionButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.SUBTRACTION,
    );
    const multiplicationButtonElement: HTMLElement = getByText(
      UiCalculatorCharacters.MULTIPLICATION,
    );

    fireEvent.click(additionButtonElement);
    fireEvent.click(divisionButtonElement);
    fireEvent.click(multiplicationButtonElement);
    fireEvent.click(subtractionButtonElement);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toEqual(
      expressionWithAllOperatorsCharacters,
    );
  });
});
