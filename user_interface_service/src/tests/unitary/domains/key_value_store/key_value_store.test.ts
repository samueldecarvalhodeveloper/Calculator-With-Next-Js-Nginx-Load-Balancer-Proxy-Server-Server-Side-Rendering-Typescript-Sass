import { describe, test, expect } from "@jest/globals";
import KeyValueStore from "../../../../domains/key_value_store/key_value_store";
import {
  LAST_CALCULATION_VALUE,
} from "../../../constants/key_value_store_constants";
import KeyValueDatabase from "../../../../domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";
import StoreDataEntity from "../../../../domains/key_value_store/infrastructure/entities/store_data_entity";
import StoreDataEntityFactory from "../../../../domains/key_value_store/store_data_entity_factory";
import { StoreValue } from "../../../../domains/key_value_store/infrastructure/environment/typescript/types";
import KeyValueDatabaseActiveRecord from "../../../../domains/key_value_store/key_value_database_active_record";
import { LAST_SESSION_CALCULATION_KEY } from "../../../../constants/ui_constants";

describe('Test Class: "KeyValueStore"; Behavior', () => {
  test('Test If Method: "setItem"; Stores Item In Key Value Database', () => {
    const storeDataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(LAST_CALCULATION_VALUE);
    const stringifiedDataToBeStored: string =
      JSON.stringify(storeDataToBeStored);

    KeyValueStore.setItem(LAST_SESSION_CALCULATION_KEY, LAST_CALCULATION_VALUE);

    const stringifiedDataFromDatabase: string =
      KeyValueDatabase.getSelectedKeyData(LAST_SESSION_CALCULATION_KEY);

    expect(stringifiedDataFromDatabase).toEqual(stringifiedDataToBeStored);
  });

  test('Test If Method: "getItem"; Gets Item Data From Key Value Database', () => {
    KeyValueDatabaseActiveRecord.setItem(
      LAST_SESSION_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const dataFromKeyValueDatabase: StoreValue =
      KeyValueStore.getItem(LAST_SESSION_CALCULATION_KEY);

    expect(dataFromKeyValueDatabase).toEqual(LAST_CALCULATION_VALUE);
  });
});
