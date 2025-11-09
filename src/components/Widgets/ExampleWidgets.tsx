import { ReactNode } from "react";
import { Dropdown } from "../Dropdown/Dropdown";

const WidgetWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "16px",
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export interface ExampleWidget1Props {
  name: string;
}

export interface ExampleWidget2Props {
  greeting: string;
}

export interface ExampleWidget3Props {
  greeting: string;
}

export const ExampleWidget1 = (props: ExampleWidget1Props) => {
  return (
    <WidgetWrapper>
      <h2 style={{ marginTop: "0.2rem", marginBottom: "0.2rem" }}>Widget 1</h2>
      Bacon ipsum dolor amet shank burgdoggen tongue sirloin andouille tri-tip
      rump pork loin ham hock salami. Pig picanha bacon shankle ground round
      corned beef alcatra chicken strip steak chislic. Turducken sirloin t-bone
      bresaola hamburger.
    </WidgetWrapper>
  );
};

export const ExampleWidget2 = (props: ExampleWidget2Props) => {
  return (
    <WidgetWrapper>
      <h2 style={{ marginTop: "0.2rem", marginBottom: "0.5rem" }}>Widget 2</h2>
      <div
        style={{
          marginBottom: "0.5rem",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.08)",
          borderRadius: "8px",
          height: "50px",
        }}
      ></div>
      <div
        style={{
          marginBottom: "0.5rem",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.08)",
          borderRadius: "8px",
          height: "50px",
        }}
      ></div>
      <div
        style={{
          marginBottom: "0.5rem",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.08)",
          borderRadius: "8px",
          height: "50px",
        }}
      ></div>
    </WidgetWrapper>
  );
};

export const ExampleWidget3 = (props: ExampleWidget3Props) => {
  return (
    <WidgetWrapper>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            marginBottom: "0.5rem",
            marginRight: "1rem",
            minWidth: "3rem",
            height: "3rem",
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: "8px",
          }}
        ></div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        vitae! Perspiciatis asperiores illum, ea soluta magnam sequi velit nisi
        totam ab dolorem recusandae sed architecto voluptatum odio aspernatur
        distinctio adipisci!
      </div>
    </WidgetWrapper>
  );
};

export const ExampleWidget4 = () => {
  return <WidgetWrapper>Hello I'm example widget 4</WidgetWrapper>;
};

export const SelectWidget = ({
  onClick,
}: {
  onClick: (id: string) => void;
}) => {
  return (
    <WidgetWrapper>
      <Dropdown
        selectedOption={null}
        onClick={onClick}
        button={"Select widget"}
        options={[
          {
            id: "widget1",
            title: "Widget 1",
          },
          {
            id: "widget2",
            title: "Widget 2",
          },
        ]}
      />
    </WidgetWrapper>
  );
};
