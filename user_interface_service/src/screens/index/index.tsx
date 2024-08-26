"use client";

import { JSX } from "react";
import Button from "../../components/button/button";
import Calculator from "../../components/calculator/calculator";
import Keyboard from "../../components/keyboard/keyboard";
import styles from "./styles.module.scss";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";
import useCalculation from "../../hooks/use_calculation";

function Index(): JSX.Element {
  const { addCharacter, backspace, calculationExpression, clean, evaluate } =
    useCalculation();

  return (
    <main className={styles.main}>
      <Calculator value={calculationExpression}>
        <Keyboard>
          <div className={styles.keyboard_one_slot_size_row}>
            <Button
              className={styles.yellow_button}
              character={UiCalculatorCharacters.CLEAN}
              onClick={() => {
                clean();
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.DIVISION}
              onClick={() => {
                addCharacter(CalculatorCharacters.DIVISION);
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.MULTIPLICATION}
              onClick={() => {
                addCharacter(CalculatorCharacters.MULTIPLICATION);
              }}
            />
            <Button
              className={styles.yellow_button}
              character={UiCalculatorCharacters.BACKSPACE}
              onClick={() => {
                backspace();
              }}
            />
          </div>
          <div className={styles.keyboard_one_slot_size_row}>
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.SEVEN}
              onClick={() => {
                addCharacter(CalculatorCharacters.SEVEN);
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.EIGHT}
              onClick={() => {
                addCharacter(CalculatorCharacters.EIGHT);
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.NINE}
              onClick={() => {
                addCharacter(CalculatorCharacters.NINE);
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.ADDITION}
              onClick={() => {
                addCharacter(CalculatorCharacters.ADDITION);
              }}
            />
          </div>
          <div className={styles.keyboard_one_slot_size_row}>
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.FOUR}
              onClick={() => {
                addCharacter(CalculatorCharacters.FOUR);
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.FIVE}
              onClick={() => {
                addCharacter(CalculatorCharacters.FIVE);
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.SIX}
              onClick={() => {
                addCharacter(CalculatorCharacters.SIX);
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.SUBTRACTION}
              onClick={() => {
                addCharacter(CalculatorCharacters.SUBTRACTION);
              }}
            />
          </div>
          <div className={styles.keyboard_two_slot_size_row}>
            <div className={styles.keyboard_two_slot_size_row_button_container}>
              <div>
                <Button
                  className={styles.light_blue_button}
                  character={UiCalculatorCharacters.ONE}
                  onClick={() => {
                    addCharacter(CalculatorCharacters.ONE);
                  }}
                />
                <Button
                  className={styles.light_blue_button}
                  character={UiCalculatorCharacters.TWO}
                  onClick={() => {
                    addCharacter(CalculatorCharacters.TWO);
                  }}
                />
                <Button
                  className={styles.light_blue_button}
                  character={UiCalculatorCharacters.THREE}
                  onClick={() => {
                    addCharacter(CalculatorCharacters.THREE);
                  }}
                />
              </div>
              <div
                className={
                  styles.keyboard_two_slot_size_row_zero_button_container
                }>
                <Button
                  className={styles.light_blue_button}
                  character={UiCalculatorCharacters.ZERO}
                  onClick={() => {
                    addCharacter(CalculatorCharacters.ZERO);
                  }}
                />
                <Button
                  className={styles.dark_blue_button}
                  character={UiCalculatorCharacters.POINT}
                  onClick={() => {
                    addCharacter(CalculatorCharacters.POINT);
                  }}
                />
              </div>
            </div>
            <Button
              className={styles.yellow_button}
              character={UiCalculatorCharacters.EVALUATE}
              onClick={() => {
                evaluate();
              }}
            />
          </div>
        </Keyboard>
      </Calculator>
    </main>
  );
}

export default Index;
