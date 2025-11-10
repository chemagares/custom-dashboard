import {
  ExampleWidget1Props,
  ExampleWidget2Props,
  ExampleWidget3Props,
} from "../components/Widgets/ExampleWidgets";

export type ComponentItem =
  | {
      id: "GlobalMarkets";
      props: ExampleWidget1Props;
    }
  | {
      id: "Currencies";
      props: ExampleWidget2Props;
    }
  | {
      id: "TopGainers";
      props: ExampleWidget3Props;
    };
