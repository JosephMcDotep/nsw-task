import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  disabled = false,
  ...args
}) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      {...args}
    >
      {text}
    </button>
  );
};

export default Button;
