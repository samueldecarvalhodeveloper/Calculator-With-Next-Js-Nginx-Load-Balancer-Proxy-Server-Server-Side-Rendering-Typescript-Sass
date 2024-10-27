import { describe, test, expect } from "@jest/globals";
import { LAST_SESSION_CALCULATION_KEY } from "../../constants/ui_constants";
import KeyValueStore from "../../domains/key_value_store/key_value_store";
import { LAST_CALCULATION_VALUE } from "../constants/key_value_store_constants";
import StoreDataEntity from "../../domains/key_value_store/infrastructure/entities/store_data_entity";
import StoreDataEntityFactory from "../../domains/key_value_store/store_data_entity_factory";
import KeyValueDatabase from "../../domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";
import KeyValueDatabaseActiveRecord from "../../domains/key_value_store/key_value_database_active_record";
import { StoreValue } from "../../domains/key_value_store/infrastructure/environment/typescript/types";

describe('Test Component: "KeyValueStore"; Behavior', () => {
  test("Test Storing Item In Key Value Database", () => {
    const storeDataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(LAST_CALCULATION_VALUE);
    const stringifiedDataToBeStored: string =
      JSON.stringify(storeDataToBeStored);

    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const stringifiedDataFromDatabase: string =
      KeyValueDatabase.getSelectedKeyData(LAST_SESSION_CALCULATION_KEY);

    expect(stringifiedDataFromDatabase).toEqual(stringifiedDataToBeStored);
  });

  test("Test Getting Item Data From Key Value Database", () => {
    KeyValueDatabaseActiveRecord.setItem(
      LAST_SESSION_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const dataFromKeyValueDatabase: StoreValue = KeyValueStore.getItem(
      LAST_SESSION_CALCULATION_KEY,
    );

    expect(dataFromKeyValueDatabase).toEqual(LAST_CALCULATION_VALUE);
  });
});
