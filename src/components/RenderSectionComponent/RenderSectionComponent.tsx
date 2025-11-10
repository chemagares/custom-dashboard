import { ComponentItem } from "../../types/componentItem"
import {
  InventoryStatus,
  ProjectStatus,
  TeamMembers,
} from "../Widgets/ExampleWidgets"

export const RenderSectionComponent = ({ item }: { item: ComponentItem }) => {
  console.log(item?.id)
  switch (item?.id) {
    case "InventoryStatus":
      return <InventoryStatus />
    case "ProjectStatus":
      return <ProjectStatus />
    case "TeamMembers":
      return <TeamMembers />
  }
}
