import { useState, type ReactNode } from 'react';

import './Dropdown.styles.css';

export const Dropdown = ({
  button,
  options,
  onClick,
}: {
  button: string | ReactNode;
  options: Array<{ title: string; id: string }>;
  onClick: (id: string) => void;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown__button">
        {typeof button === 'string' ? (
          <div
            className="dropdown__button-content"
            onClick={() => setActive(!active)}
          >
            {button}
          </div>
        ) : (
          <div onClick={() => setActive(!active)}>{button}</div>
        )}
        {active && (
          <div className="dropdown__panel">
            {options?.map((o) => (
              <div
                className="dropdown__panel-item"
                onClick={() => onClick(o?.id)}
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
