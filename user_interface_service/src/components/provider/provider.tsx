"use client";

import { ReactNode, JSX } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../../store/store";

function Provider(props: { children: ReactNode }): JSX.Element {
  const { children } = props;

  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}

export default Provider;
