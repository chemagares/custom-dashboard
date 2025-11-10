import React from "react"
import type { SectionType } from "../Dashboard/Dashboard"
import "./Section.styles.css"
import type { TreeNode } from "tr33"
import { SectionEditHandler } from "./SectionEditHandler"
import { ComponentItem } from "../../types/componentItem"
import { RenderSectionComponent } from "../RenderSectionComponent/RenderSectionComponent"
import { SelectWidgetDropdown } from "../SelectWidget/SelectWidget"

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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
      </svg>
    </div>
  )
}

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
  item: TreeNode<SectionType>
  edit: boolean
  addPanelBefore: (id: string) => void
  addPanelAfter: (id: string) => void
  removePanel: (id: string) => void
  isFirstChildren: boolean
  isLastChildren: boolean
  allowDelete: boolean
  updateValue: (id: string, value: SectionType) => void
}) => {
  const hasChildren = item?.children && item?.children()?.length > 0

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
    )
  }

  return (
    <>
      {isFirstChildren && edit ? (
        <SectionEditHandler
          display={"COLUMN"}
          addPanel={() => {
            addPanelBefore(item?.id())
          }}
        />
      ) : null}
      <div className={`d-flex-column section-gap flex-1`}>
        <div className="dashboard-section ">
          <div className="dashboard-section__header">
            {/* Node {item?.id()} */}
            {edit && (
              <SelectWidgetDropdown
                updateValue={updateValue}
                item={item}
                selectedOption={item?.value()?.value?.component?.id as string}
              />
            )}
            {edit && allowDelete && (
              <div className="dashboard-section__settings-handler ml-auto">
                <div
                  onClick={() => {
                    if (item?.id()) {
                      removePanel(item?.id())
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
                <RenderSectionComponent
                  item={item?.value()?.value?.component as ComponentItem}
                />
              ) : (
                <SelectWidgetDropdown
                  updateValue={updateValue}
                  item={item}
                  selectedOption={item?.value()?.value?.component?.id as string}
                />
              )}
            </div>
          )}
        </div>
        {item?.isLeaf() && edit ? (
          <SectionEditHandler
            display={"COLUMN"}
            addPanel={() => {
              addPanelAfter(item?.id())
            }}
          />
        ) : null}
      </div>
    </>
  )
}
