import { useState, type ReactNode } from "react";

import "./Dropdown.styles.css";

export const Dropdown = ({
  button,
  options,
  onClick,
  selectedOption,
}: {
  button: string | ReactNode;
  options: Array<{ title: string; id: string }>;
  onClick: (id: string) => void;
  selectedOption: string | null;
}) => {
  const [active, setActive] = useState(false);

  const title = selectedOption
    ? options?.find((i) => i?.id === selectedOption)?.title
    : button;

  return (
    <div className="dropdown">
      <div className="dropdown__button">
        {typeof button === "string" ? (
          <div
            className="dropdown__button-content"
            onClick={() => setActive(!active)}
          >
            {title}
          </div>
        ) : (
          <div onClick={() => setActive(!active)}>
            {selectedOption ? title : button}
          </div>
        )}
        {active && (
          <div className="dropdown__panel">
            {options?.map((o, idx) => (
              <div
                key={`${o?.id}-${idx}`}
                className="dropdown__panel-item"
                onClick={() => {
                  setActive(false);
                  onClick(o?.id);
                }}
              >
                {o?.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
