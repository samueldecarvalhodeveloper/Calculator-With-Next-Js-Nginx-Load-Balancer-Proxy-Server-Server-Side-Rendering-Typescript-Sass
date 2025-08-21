import { JSX } from "react";
import styles from "./styles.module.scss";

function Button(props: {
  className: string;
  character: string;
  onClick: () => void;
}): JSX.Element {
  const { className, character, onClick } = props;

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}>
      {character}
    </button>
  );
}

export default Button;
