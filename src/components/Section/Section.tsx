import React from "react";
import type { SectionType } from "../Dashboard/Dashboard";
import "./Section.styles.css";
import type { TreeNode } from "tr33";
import { SectionEditHandler } from "./SectionEditHandler";
import {
  ExampleWidget1,
  ExampleWidget1Props,
  ExampleWidget2,
  ExampleWidget2Props,
  ExampleWidget3,
  ExampleWidget3Props,
  SelectWidget,
} from "../Widgets/ExampleWidgets";
import { Dropdown } from "../Dropdown/Dropdown";

export const SectionDeleteBtn = () => {
  return (
    <div className="dashboard-section__delete">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
      </svg>
    </div>
  );
};

// const COMPONENTS_REGISTRY = {
//   widget1: ExampleWidget1,
//   widget2: ExampleWidget2,
//   widget3: ExampleWidget3,
//   selectWidget: SelectWidget,
// };

export type ComponentItem =
  | {
      id: "widget1";
      props: ExampleWidget1Props;
    }
  | {
      id: "widget2";
      props: ExampleWidget2Props;
    }
  | {
      id: "widget3";
      props: ExampleWidget3Props;
    };

//export type ComponentType = keyof typeof COMPONENTS_REGISTRY;

const renderComponent = (item: ComponentItem) => {
  switch (item?.id) {
    case "widget1":
      return <ExampleWidget1 {...item?.props} />;
    case "widget2":
      return <ExampleWidget2 {...item?.props} />;
    case "widget3":
      return <ExampleWidget3 {...item?.props} />;
  }
};

// const renderComponent = (componentType: ComponentType = "selectWidget", props:) => {
//   if (componentType) {
//     const Component = COMPONENTS_REGISTRY[componentType];
//     return Component ? (
//       <Component />
//     ) : (
//       <Dropdown
//         onClick={() => {
//           // TBDD
//         }}
//         button={"asdf"}
//         options={[
//           {
//             id: "asd",
//             title: "sdf",
//           },
//         ]}
//       />
//     );
//   }
// };

export const Section = ({
  item,
  edit,
  addPanelBefore,
  addPanelAfter,
  removePanel,
  isFirstChildren,
  allowDelete,
  updateValue,
}: {
  item: TreeNode<SectionType>;
  edit: boolean;
  addPanelBefore: (id: string) => void;
  addPanelAfter: (id: string) => void;
  removePanel: (id: string) => void;
  isFirstChildren: boolean;
  isLastChildren: boolean;
  allowDelete: boolean;
  updateValue: (id: string, value: SectionType) => void;
}) => {
  const hasChildren = item?.children && item?.children()?.length > 0;

  if (hasChildren) {
    return (
      <div className={`d-flex-column section-gap flex-1`}>
        {item?.children()?.map((c, idx) => (
          <React.Fragment key={c?.id()}>
            <Section
              key={c?.id()}
              item={c as TreeNode<SectionType>}
              edit={edit}
              addPanelBefore={addPanelBefore}
              addPanelAfter={addPanelAfter}
              allowDelete={allowDelete}
              removePanel={removePanel}
              isFirstChildren={idx === 0}
              isLastChildren={idx === item?.children()?.length - 1}
              updateValue={updateValue}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <>
      {isFirstChildren && edit ? (
        <SectionEditHandler
          display={"COLUMN"}
          addPanel={() => {
            addPanelBefore(item?.id());
          }}
        />
      ) : null}
      <div className={`d-flex-column section-gap flex-1`}>
        <div className="dashboard-section ">
          <div className="dashboard-section__header">
            {/* Node {item?.id()} */}
            {edit && (
              <div>
                <Dropdown
                  selectedOption={item?.value()?.value?.component?.id as string}
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
                      id: "widget1",
                      title: "Widget 1",
                    },
                    {
                      id: "widget2",
                      title: "Widget 2",
                    },
                    {
                      id: "widget3",
                      title: "Widget 3",
                    },
                  ]}
                />
              </div>
            )}
            {edit && allowDelete && (
              <div className="dashboard-section__settings-handler ml-auto">
                <div
                  onClick={() => {
                    if (item?.id()) {
                      removePanel(item?.id());
                    }
                  }}
                >
                  <SectionDeleteBtn />
                </div>
              </div>
            )}
          </div>
          {!edit && (
            <div className="dashboard-section__content">
              {item?.value()?.value?.component ? (
                renderComponent(
                  item?.value()?.value?.component as ComponentItem
                )
              ) : (
                <SelectWidget
                  onClick={(id) => {
                    updateValue(item?.id(), {
                      display: "COLUMN",
                      component: {
                        id: id,
                        props: {},
                      } as ComponentItem,
                    });
                  }}
                />
              )}
            </div>
          )}
        </div>
        {item?.isLeaf() && edit ? (
          <SectionEditHandler
            display={"COLUMN"}
            addPanel={() => {
              addPanelAfter(item?.id());
            }}
          />
        ) : null}
      </div>
    </>
  );
};
