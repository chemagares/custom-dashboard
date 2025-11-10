import { Section } from "../Section/Section"
import { createTree, TreeNode, type RawTreeNode } from "tr33"
import React from "react"
import { SectionEditHandler } from "../Section/SectionEditHandler"
import { SectionType } from "../Dashboard/Dashboard"

export const DashboardScreen = ({
  dashboard,
  setDashboard,
  edit,
  isActive,
}: {
  dashboard: TreeNode<SectionType>
  setDashboard: (item: TreeNode<SectionType>) => void
  edit: boolean
  isActive: boolean
}) => {
  const isTheOnlyNode =
    dashboard?.children()?.length === 1 &&
    dashboard?.children()?.[0]?.children()?.length === 1
  const addPanel = (
    id: string,
    mode: "BEFORE" | "AFTER",
    isColumn?: boolean
  ) => {
    const newItem = (
      isColumn
        ? {
            value: {
              display: "COLUMN",
            },
            children: [
              {
                value: {
                  display: "COLUMN",
                },
              },
            ],
          }
        : {
            value: {
              display: "COLUMN",
            },
          }
    ) as RawTreeNode<SectionType>

    if (id) {
      const [node] = dashboard.find(id)
      const parentId = node?.getParentId()
      if (node && parentId) {
        const [parent] = dashboard.find(parentId)
        if (mode === "BEFORE") {
          parent?.addBefore(id, newItem)
        } else {
          parent?.addAfter(id, newItem)
        }
      }
    }

    setDashboard(createTree(dashboard?.value()) as TreeNode<SectionType>)
  }

  const removePanel = (id: string) => {
    if (id) {
      const [node] = dashboard.find(id)
      console.log(node)
      const parentId = node?.getParentId()
      if (node && parentId) {
        const [parent] = dashboard.find(parentId)
        console.log(parent)
        if (parent) parent.remove(id)
        // If parent does not have children, remove it
        if (!parent?.children()?.length && parent) {
          const [upper] = dashboard.find(parent.getParentId()!)
          upper?.remove(parent.id()!)
        }
      }
    }

    setDashboard(createTree(dashboard?.value()) as TreeNode<SectionType>)
  }

  const updateValue = (id: string, value: SectionType) => {
    const [node] = dashboard.find(id)
    node?.update(value)
    setDashboard(createTree(dashboard?.value()) as TreeNode<SectionType>)
  }

  //console.log(JSON.stringify(dashboard?.value()));

  return (
    <div
      className="d-flex-row section-gap flex-1"
      style={{
        opacity: isActive ? 1 : 0,
        transition: isActive ? "0.5s ease-in" : "0",
      }}
    >
      {dashboard?.children()?.map((c, idx) => {
        return (
          <React.Fragment key={c?.id()}>
            {idx === 0 && edit ? (
              <SectionEditHandler
                out={false}
                display={"ROW"}
                addPanel={() => {
                  addPanel(c.id()!, "BEFORE", true)
                }}
              />
            ) : null}
            <Section
              isFirstChildren={false}
              isLastChildren={false}
              item={c as TreeNode<SectionType>}
              edit={edit}
              allowDelete={!isTheOnlyNode}
              addPanelBefore={(id) => addPanel(id, "BEFORE")}
              addPanelAfter={(id) => addPanel(id, "AFTER")}
              removePanel={(id: string) => {
                removePanel(id)
              }}
              updateValue={updateValue}
            />
            {edit && (
              <SectionEditHandler
                out={false}
                display={"ROW"}
                addPanel={() => {
                  addPanel(c.id()!, "AFTER", true)
                }}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}
