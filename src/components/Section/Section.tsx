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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
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
        <div className="dashboard-section">
          <div className="dashboard-section__container">
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
                  <button
                    onClick={() => {
                      if (item?.id()) {
                        removePanel(item?.id())
                      }
                    }}
                  >
                    <SectionDeleteBtn />
                  </button>
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
                  <div className="dashboard-section__content-empty">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-table-plus"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                      <path d="M3 10h18" />
                      <path d="M10 3v18" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                    </svg>
                    <div className="dashboard-section__content-empty-text">
                      Edit layout and select a widget to display
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
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
