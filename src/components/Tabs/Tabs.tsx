/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import "./Tabs.styles.css";

export const Tabs = ({
  items,
  onClick,
  activeTab,
}: {
  items: Array<{ title: string; id: string }>;
  onClick: (id: string) => void;
  activeTab: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<Array<HTMLDivElement | null>>([null]);
  const [width, setWidth] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [height, setHeight] = useState(0);
  const [left, setLeft] = useState(0);
  const [enabledTransitions, setEnabledTransitions] = useState(false);

  const setActiveTabWidth = () => {
    const index = items?.findIndex((i) => i?.id === activeTab);
    const rect = refs?.current?.[index]?.getBoundingClientRect();

    if (rect) {
      const left =
        rect?.left -
        (containerRef?.current?.getBoundingClientRect()?.left || 0);

      setWidth(rect?.width);
      setHeight(rect?.height);
      setLeft(left);
    }
  };

  useEffect(() => {
    setActiveTabWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    setTimeout(() => {
      setEnabledTransitions(true);
    }, 500);
  }, []);

  return (
    <div className="tabs" ref={containerRef}>
      <div
        className="tabs__active-element"
        style={{
          width: `${width}px`,
          left: `${left}px`,
          transition: enabledTransitions ? `${0.5}s` : "",
        }}
      ></div>
      {items?.map((i, idx) => (
        <div
          className={`tabs__item ${activeTab === i?.id ? "--active" : ""}`}
          onClick={() => {
            onClick(i?.id);
          }}
          ref={(el) => (refs.current[idx] = el) as unknown as any}
        >
          {i?.title}
        </div>
      ))}
    </div>
  );
};
