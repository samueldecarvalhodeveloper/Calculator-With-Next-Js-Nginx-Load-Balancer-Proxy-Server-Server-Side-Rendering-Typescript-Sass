import { ReactNode } from "react";
import { VIEWFINDER_ELEMENT_TEST_ID } from "../../constants/pages/index_page_constants";
import styles from "./styles.module.scss";

function Calculator(props: { value: string; children: ReactNode }) {
  const { value, children } = props;

  return (
    <div className={styles.calculator}>
      <div className={styles.viewfinder}>
        <h1 className={styles.label}>Calculator</h1>
        <div className={styles.hint}>
          <h4>Result:</h4>
        </div>
        <div className={styles.value}>
          <h2 data-testid={VIEWFINDER_ELEMENT_TEST_ID}>{value}</h2>
        </div>
      </div>
      <div className={styles.keyboard}>{children}</div>
    </div>
  );
}

export default Calculator;
