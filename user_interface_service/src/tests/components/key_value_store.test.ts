import { describe, test, expect } from "@jest/globals";
import { LAST_SESSION_CALCULATION_KEY } from "../../constants/ui_constants";
import KeyValueStore from "../../domains/key_value_store/key_value_store";
import { LAST_CALCULATION_VALUE } from "../constants/key_value_store_constants";

describe('Test Component: "KeyValueStore"; Behavior', () => {
  test("Test If Component Handles Data Input And Output Scenario Correctly", () => {
    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const storedValue: string = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    ) as string;

    expect(storedValue).toEqual(LAST_CALCULATION_VALUE);
  });
});
