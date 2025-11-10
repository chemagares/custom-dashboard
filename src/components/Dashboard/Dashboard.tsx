import "./Dashboard.styles.css"
import { createTree, TreeNode } from "tr33"
import { useState } from "react"
import * as EXAMPLE_0 from "./examples/0.json"
import * as EXAMPLE_1 from "./examples/1.json"
import * as EXAMPLE_4 from "./examples/4.json"
import * as EXAMPLE_5 from "./examples/5.json"
import { DashboardScreen } from "../DashboardScreen/DashboardScreen"
import { Tabs } from "../Tabs/Tabs"
import { ComponentItem } from "../../types/componentItem"

export interface SectionType {
  display: "COLUMN" | "ROW"
  component?: ComponentItem
}

export const Dashboard = () => {
  const [dashboard, setDashboard] = useState<
    Array<{
      title: string
      id: string
      tree: TreeNode<SectionType>
    }>
  >([
    {
      id: "Example 5",
      title: "Example 5",
      tree: createTree(EXAMPLE_5) as TreeNode<SectionType>,
    },
    {
      id: "Example I",
      title: "Example I",
      tree: createTree(EXAMPLE_1) as TreeNode<SectionType>,
    },
    {
      id: "Example 2",
      title: "Example 2",
      tree: createTree(EXAMPLE_4) as TreeNode<SectionType>,
    },
    {
      id: "Initial",
      title: "Initial",
      tree: createTree(EXAMPLE_0) as TreeNode<SectionType>,
    },
    // {
    //   id: "Example 3",
    //   title: "Another",
    //   tree: createTree(EXAMPLE_3) as TreeNode<SectionType>,
    // },
    // {
    //   id: "Example 5",
    //   title: "Another one",
    //   tree: createTree(EXAMPLE_4) as TreeNode<SectionType>,
    // },
  ])

  const [activeScreen, setActiveScreen] = useState(dashboard?.[0]?.id)
  const [edit, setEdit] = useState(false)

  const updateDahboard = (id: string, update: TreeNode<SectionType>) => {
    const copy = [...dashboard]
    const position = copy?.findIndex((i) => i?.id === id)
    if (position !== -1) {
      copy[position].tree = update
    }

    setDashboard(copy)
  }

  console.log("active on parent", activeScreen)

  const activeIndex = dashboard?.findIndex((i) => i?.id === activeScreen)

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <img src="/dashboardIcon.svg" alt="" />
        <div className="dashboard__title">Custom Dashboard</div>
      </div>
      <div className="dashboard__controls">
        <div>
          <Tabs
            items={dashboard?.map((s) => ({ id: s?.id, title: s?.title }))}
            onClick={(id: string) => {
              setActiveScreen(id)
              setEdit(false)
            }}
            activeTab={activeScreen}
          />
        </div>
        <div className="toggle-edit-mode ml-auto">
          {/* <div className="toggle-edit-mode__label">Edit screen</div> */}
          {/* <Switch onChange={() => setEdit((prev) => !prev)} value={edit} /> */}
          {edit ? (
            <button
              className="custom-button --success"
              onClick={() => setEdit((prev) => !prev)}
            >
              <div className="d-flex-row align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-check"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
              <span className="ml-2">Save</span>
            </button>
          ) : (
            <button
              className="custom-button"
              onClick={() => setEdit((prev) => !prev)}
            >
              <div className="d-flex-row align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                  <path d="M13.5 6.5l4 4" />
                </svg>
              </div>
              <span className="ml-2">Edit layout</span>
            </button>
          )}
        </div>
      </div>
      <div
        className="dashboard__content"
        style={{
          width: `${dashboard?.length * 100}vw`,
          transform: `translateX(${
            activeIndex * -1 * (100 / dashboard?.length)
          }%)`,
        }}
      >
        {dashboard?.map((i, idx) => (
          <div className="dashboard__content-screen" key={i?.id}>
            <DashboardScreen
              isActive={activeIndex === idx}
              dashboard={i?.tree}
              setDashboard={(update) => {
                updateDahboard(i?.id, update)
              }}
              edit={edit}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
