import { JSX, ReactNode } from "react";
import styles from "./styles.module.scss";

function Keyboard(props: { children: ReactNode }): JSX.Element {
  const { children } = props;

  return <div className={styles.keyboard}>{children}</div>;
}

export default Keyboard;
