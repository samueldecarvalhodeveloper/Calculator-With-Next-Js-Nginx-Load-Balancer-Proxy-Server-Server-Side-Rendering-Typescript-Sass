"use client";

import { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import {
  addCharacter,
  clean,
  backspace,
  evaluate,
} from "../../slices/calculator_slice";
import { RootState } from "../../store/store";
import Button from "../../components/button/button";
import Calculator from "../../components/calculator/calculator";
import Keyboard from "../../components/keyboard/keyboard";
import styles from "./styles.module.scss";
import CalculatorCharacters from "../../domains/calculator/calculator_characters";
import UiCalculatorCharacters from "../../calculator_characters/ui_calculator_characters";

function Index(): JSX.Element {
  const calculationExpression: string = useSelector(
    (state: RootState) => state.calculator.value,
  );
  const dispatcher: Dispatch<UnknownAction> = useDispatch();

  return (
    <main className={styles.main}>
      <Calculator value={calculationExpression}>
        <Keyboard>
          <div className={styles.keyboard_one_slot_size_row}>
            <Button
              className={styles.yellow_button}
              character={UiCalculatorCharacters.CLEAN}
              onClick={() => {
                dispatcher(clean());
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.DIVISION}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.DIVISION));
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.MULTIPLICATION}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.MULTIPLICATION));
              }}
            />
            <Button
              className={styles.yellow_button}
              character={UiCalculatorCharacters.BACKSPACE}
              onClick={() => {
                dispatcher(backspace());
              }}
            />
          </div>
          <div className={styles.keyboard_one_slot_size_row}>
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.SEVEN}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.SEVEN));
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.EIGHT}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.EIGHT));
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.NINE}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.NINE));
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.ADDITION}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.ADDITION));
              }}
            />
          </div>
          <div className={styles.keyboard_one_slot_size_row}>
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.FOUR}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.FOUR));
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.FIVE}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.FIVE));
              }}
            />
            <Button
              className={styles.light_blue_button}
              character={UiCalculatorCharacters.SIX}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.SIX));
              }}
            />
            <Button
              className={styles.dark_blue_button}
              character={UiCalculatorCharacters.SUBTRACTION}
              onClick={() => {
                dispatcher(addCharacter(CalculatorCharacters.SUBTRACTION));
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
                    dispatcher(addCharacter(CalculatorCharacters.ONE));
                  }}
                />
                <Button
                  className={styles.light_blue_button}
                  character={UiCalculatorCharacters.TWO}
                  onClick={() => {
                    dispatcher(addCharacter(CalculatorCharacters.TWO));
                  }}
                />
                <Button
                  className={styles.light_blue_button}
                  character={UiCalculatorCharacters.THREE}
                  onClick={() => {
                    dispatcher(addCharacter(CalculatorCharacters.THREE));
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
                    dispatcher(addCharacter(CalculatorCharacters.ZERO));
                  }}
                />
                <Button
                  className={styles.dark_blue_button}
                  character={UiCalculatorCharacters.POINT}
                  onClick={() => {
                    dispatcher(addCharacter(CalculatorCharacters.POINT));
                  }}
                />
              </div>
            </div>
            <Button
              className={styles.yellow_button}
              character={UiCalculatorCharacters.EVALUATE}
              onClick={() => {
                dispatcher(evaluate());
              }}
            />
          </div>
        </Keyboard>
      </Calculator>
    </main>
  );
}

export default Index;
