/* eslint-disable @typescript-eslint/no-unused-expressions */
import "./Switch.styles.css";
import { useEffect, useState } from "react";

export interface SwitchProps {
  value?: boolean;
  onChange?: (newValue: boolean) => void;
}

export function Switch(props: SwitchProps) {
  const [pressed, setPressed] = useState(props?.value);

  useEffect(() => {
    setPressed(props?.value);
  }, [props?.value]);

  return (
    <button
      className={`switch-button 
        ${pressed ? "--active" : ""}
      `}
      onClick={() => {
        setPressed(!pressed);
        props?.onChange ? props?.onChange(pressed || false) : null;
      }}
    >
      <div
        className={`switch-button__circle 
          ${pressed ? "--active" : ""} 
        `}
      ></div>
    </button>
  );
}
