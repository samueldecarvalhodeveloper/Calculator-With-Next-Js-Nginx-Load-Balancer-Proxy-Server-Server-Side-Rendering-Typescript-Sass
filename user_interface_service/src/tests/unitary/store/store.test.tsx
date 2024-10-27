import { describe, test, expect } from "@jest/globals";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../../constants/pages/index_page_constants";
import render from "../../concerns/react_render_adapter";
import Index from "../../../screens/index/index";

describe("Test Module: Store; Behavior", () => {
  test("Test If Store Is Configured By Verifying If Calculator State Is Hydrating Elements", () => {
    const { getByTestId } = render(<Index />);

    const viewfinderElement: HTMLElement = getByTestId(
      VIEWFINDER_ELEMENT_TEST_ID,
    );

    expect(viewfinderElement.innerHTML).toBeFalsy();
  });
});
