import { render as renderer } from "@testing-library/react";
import { JSX } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";

function render(children: JSX.Element) {
  return renderer(<Provider store={store}> {children} </Provider>);
}

export default render;
