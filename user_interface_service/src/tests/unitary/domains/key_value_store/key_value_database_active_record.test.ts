import { describe, expect, test } from "@jest/globals";
import KeyValueDatabaseActiveRecord from "../../../../domains/key_value_store/key_value_database_active_record";
import {
  LAST_CALCULATION_VALUE,
} from "../../../constants/key_value_store_constants";
import KeyValueDatabase from "../../../../domains/key_value_store/infrastructure/anticorruption_layer/key_value_database";
import StoreDataEntity from "../../../../domains/key_value_store/infrastructure/entities/store_data_entity";
import { StoreValue } from "../../../../domains/key_value_store/infrastructure/environment/typescript/types";
import StoreDataEntityFactory from "../../../../domains/key_value_store/store_data_entity_factory";
import { LAST_SESSION_CALCULATION_KEY } from "../../../../constants/ui_constants";

describe('Test Class: "KeyValueDatabaseActiveRecord"; Behavior', () => {
  test('Test If Method: "setItem"; Creates Data In Key value Database', () => {
    KeyValueDatabaseActiveRecord.setItem(
      LAST_SESSION_CALCULATION_KEY,
      LAST_CALCULATION_VALUE,
    );

    const stringifiedJsonFromStoredData: string =
      KeyValueDatabase.getSelectedKeyData(LAST_SESSION_CALCULATION_KEY);

    const parsedJsonFromStoredData: StoreDataEntity = JSON.parse(
      stringifiedJsonFromStoredData,
    );

    expect(parsedJsonFromStoredData.data).toEqual(LAST_CALCULATION_VALUE);
  });

  test('Test If Method: "getKeyData"; Returns The Stored Value From Key value Database', () => {
    const storeDataToBeStored: StoreDataEntity =
      StoreDataEntityFactory.getInstance(LAST_CALCULATION_VALUE);
    const storeDataToBeStoredJsonStringified: string =
      JSON.stringify(storeDataToBeStored);

    KeyValueDatabase.setItem(
      LAST_SESSION_CALCULATION_KEY,
      storeDataToBeStoredJsonStringified,
    );

    const dataFromKeyValueDatabase: StoreValue =
      KeyValueDatabaseActiveRecord.getKeyData(LAST_SESSION_CALCULATION_KEY);

    expect(dataFromKeyValueDatabase).toEqual(LAST_CALCULATION_VALUE);
  });
});
