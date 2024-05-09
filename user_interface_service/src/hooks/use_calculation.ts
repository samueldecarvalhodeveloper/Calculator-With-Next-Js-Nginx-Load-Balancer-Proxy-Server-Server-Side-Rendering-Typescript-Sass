import { useDispatch, useSelector } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import {
  addCharacter,
  clean,
  backspace,
  evaluate,
} from "../slices/calculator_slice";
import CalculatorCharacters from "../domains/calculator/calculator_characters";

function useCalculation() {
  const calculationResult: string = useSelector(
    (state: RootState) => state.calculator.value,
  );
  const dispatcher: Dispatch<UnknownAction> = useDispatch();

  return {
    calculationResult,

    addCharacter(character: CalculatorCharacters) {
      dispatcher(addCharacter(character));
    },

    clean() {
      dispatcher(clean());
    },

    backspace() {
      dispatcher(backspace());
    },

    evaluate() {
      dispatcher(evaluate());
    },
  };
}

export default useCalculation;
