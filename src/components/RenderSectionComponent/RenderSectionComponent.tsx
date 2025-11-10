import { ComponentItem } from "../../types/componentItem"
import {
  Currencies,
  GlobalMarkets,
  TopGainers,
} from "../Widgets/ExampleWidgets"

export const RenderSectionComponent = ({ item }: { item: ComponentItem }) => {
  console.log(item?.id)
  switch (item?.id) {
    case "GlobalMarkets":
      return <GlobalMarkets />
    case "Currencies":
      return <Currencies />
    case "TopGainers":
      return <TopGainers />
  }
}
