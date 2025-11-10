import { TreeNode } from "tr33"
import { Dropdown } from "../Dropdown/Dropdown"
import { SectionType } from "../Dashboard/Dashboard"
import { ComponentItem } from "../../types/componentItem"

export const SelectWidgetDropdown = ({
  item,
  updateValue,
  selectedOption,
}: {
  item: TreeNode<SectionType>
  updateValue: (id: string, value: SectionType) => void
  selectedOption: string
}) => {
  return (
    <Dropdown
      selectedOption={selectedOption}
      onClick={(id) => {
        updateValue(item?.id(), {
          display: "COLUMN",
          component: {
            id: id,
            props: {},
          } as ComponentItem,
        })
      }}
      button={"Select widget"}
      options={[
        {
          id: "InventoryStatus",
          title: "Inventory Status",
        },
        {
          id: "TeamMembers",
          title: "Team Members",
        },
        {
          id: "ProjectStatus",
          title: "Project Status",
        },
        {
          id: "VisitsKPI",
          title: "Visits KPI",
        },
      ]}
    />
  )
}
