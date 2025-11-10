import { TreeNode } from "tr33";
import { Dropdown } from "../Dropdown/Dropdown";
import { SectionType } from "../Dashboard/Dashboard";
import { ComponentItem } from "../../types/componentItem";

export const SelectWidgetDropdown = ({
  item,
  updateValue,
  selectedOption,
}: {
  item: TreeNode<SectionType>;
  updateValue: (id: string, value: SectionType) => void;
  selectedOption: string;
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
        });
      }}
      button={"Select widget"}
      options={[
        {
          id: "GlobalMarkets",
          title: "Global Markets",
        },
        {
          id: "Currencies",
          title: "Currencies",
        },
        {
          id: "TopGainers",
          title: "Top Gainers",
        },
      ]}
    />
  );
};
