import { ComponentItem } from "../../types/componentItem";
import {
  Currencies,
  GlobalMarkets,
  TopGainers,
} from "../Widgets/ExampleWidgets";

export const RenderSectionComponent = ({ item }: { item: ComponentItem }) => {
  console.log(item?.id);
  switch (item?.id) {
    case "GlobalMarkets":
      return <GlobalMarkets {...item?.props} />;
    case "Currencies":
      return <Currencies {...item?.props} />;
    case "TopGainers":
      return <TopGainers {...item?.props} />;
  }
};
