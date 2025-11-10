import { Table } from "../Table/Table"
import { WidgetWrapper } from "../WidgetWrapper/WidgetWrapper"

export const InventoryStatus = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      <Table
        {...{
          header: [
            { value: "Product" },
            { value: "Stock" },
            { value: "Category" },
            { value: "Status" },
          ],
          title: "Inventory Status",
          rows: [
            [
              { value: "Laptop Pro" },
              { value: "45" },
              { value: "Electronics" },
              { value: "In Stock" },
            ],
            [
              { value: "Office Chair" },
              { value: "23" },
              { value: "Furniture" },
              { value: "In Stock" },
            ],
            [
              { value: "Desk Lamp" },
              { value: "8" },
              { value: "Lighting" },
              { value: "Low Stock" },
            ],
            [
              { value: "Monitor 4K" },
              { value: "67" },
              { value: "Electronics" },
              { value: "In Stock" },
            ],
            [
              { value: "Wireless Mouse" },
              { value: "156" },
              { value: "Electronics" },
              { value: "In Stock" },
            ],
            [
              { value: "Standing Desk" },
              { value: "12" },
              { value: "Furniture" },
              { value: "In Stock" },
            ],
            [
              { value: "USB-C Cable" },
              { value: "234" },
              { value: "Accessories" },
              { value: "In Stock" },
            ],
            [
              { value: "Ergonomic Keyboard" },
              { value: "5" },
              { value: "Electronics" },
              { value: "Low Stock" },
            ],
            [
              { value: "Bookshelf" },
              { value: "0" },
              { value: "Furniture" },
              { value: "Out of Stock" },
            ],
            [
              { value: "Webcam HD" },
              { value: "89" },
              { value: "Electronics" },
              { value: "In Stock" },
            ],
          ],
        }}
      />
    </WidgetWrapper>
  )
}

export const TeamMembers = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      <Table
        {...{
          title: "Team Members",
          header: [
            { value: "Name" },
            { value: "Role" },
            { value: "Department" },
            { value: "Location" },
          ],
          rows: [
            [
              { value: "Alice Johnson" },
              { value: "Designer" },
              { value: "Creative" },
              { value: "New York" },
            ],
            [
              { value: "Bob Smith" },
              { value: "Developer" },
              { value: "Engineering" },
              { value: "San Francisco" },
            ],
            [
              { value: "Carol White" },
              { value: "Manager" },
              { value: "Operations" },
              { value: "London" },
            ],
            [
              { value: "David Lee" },
              { value: "Developer" },
              { value: "Engineering" },
              { value: "Seattle" },
            ],
            [
              { value: "Emma Davis" },
              { value: "Product Manager" },
              { value: "Product" },
              { value: "Boston" },
            ],
            [
              { value: "Frank Miller" },
              { value: "DevOps Engineer" },
              { value: "Engineering" },
              { value: "Austin" },
            ],
            [
              { value: "Grace Chen" },
              { value: "UX Researcher" },
              { value: "Creative" },
              { value: "Toronto" },
            ],
            [
              { value: "Henry Wilson" },
              { value: "Data Analyst" },
              { value: "Analytics" },
              { value: "Chicago" },
            ],
            [
              { value: "Iris Brown" },
              { value: "Marketing Lead" },
              { value: "Marketing" },
              { value: "Miami" },
            ],
            [
              { value: "Jack Taylor" },
              { value: "QA Engineer" },
              { value: "Engineering" },
              { value: "Denver" },
            ],
            [
              { value: "Alice Johnson" },
              { value: "Designer" },
              { value: "Creative" },
              { value: "New York" },
            ],
            [
              { value: "Bob Smith" },
              { value: "Developer" },
              { value: "Engineering" },
              { value: "San Francisco" },
            ],
            [
              { value: "Carol White" },
              { value: "Manager" },
              { value: "Operations" },
              { value: "London" },
            ],
            [
              { value: "David Lee" },
              { value: "Developer" },
              { value: "Engineering" },
              { value: "Seattle" },
            ],
            [
              { value: "Emma Davis" },
              { value: "Product Manager" },
              { value: "Product" },
              { value: "Boston" },
            ],
            [
              { value: "Frank Miller" },
              { value: "DevOps Engineer" },
              { value: "Engineering" },
              { value: "Austin" },
            ],
            [
              { value: "Grace Chen" },
              { value: "UX Researcher" },
              { value: "Creative" },
              { value: "Toronto" },
            ],
            [
              { value: "Henry Wilson" },
              { value: "Data Analyst" },
              { value: "Analytics" },
              { value: "Chicago" },
            ],
            [
              { value: "Iris Brown" },
              { value: "Marketing Lead" },
              { value: "Marketing" },
              { value: "Miami" },
            ],
            [
              { value: "Jack Taylor" },
              { value: "QA Engineer" },
              { value: "Engineering" },
              { value: "Denver" },
            ],
            [
              { value: "Alice Johnson" },
              { value: "Designer" },
              { value: "Creative" },
              { value: "New York" },
            ],
            [
              { value: "Bob Smith" },
              { value: "Developer" },
              { value: "Engineering" },
              { value: "San Francisco" },
            ],
            [
              { value: "Carol White" },
              { value: "Manager" },
              { value: "Operations" },
              { value: "London" },
            ],
            [
              { value: "David Lee" },
              { value: "Developer" },
              { value: "Engineering" },
              { value: "Seattle" },
            ],
            [
              { value: "Emma Davis" },
              { value: "Product Manager" },
              { value: "Product" },
              { value: "Boston" },
            ],
            [
              { value: "Frank Miller" },
              { value: "DevOps Engineer" },
              { value: "Engineering" },
              { value: "Austin" },
            ],
            [
              { value: "Grace Chen" },
              { value: "UX Researcher" },
              { value: "Creative" },
              { value: "Toronto" },
            ],
            [
              { value: "Henry Wilson" },
              { value: "Data Analyst" },
              { value: "Analytics" },
              { value: "Chicago" },
            ],
            [
              { value: "Iris Brown" },
              { value: "Marketing Lead" },
              { value: "Marketing" },
              { value: "Miami" },
            ],
            [
              { value: "Jack Taylor" },
              { value: "QA Engineer" },
              { value: "Engineering" },
              { value: "Denver" },
            ],
          ],
        }}
      />
    </WidgetWrapper>
  )
}

export const ProjectStatus = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      <Table
        {...{
          title: "Project Status",
          header: [
            { value: "Project" },
            { value: "Progress" },
            { value: "Tasks" },
            { value: "Status" },
          ],
          rows: [
            [
              { value: "Website Redesign" },
              { value: "85%" },
              { value: "12/15" },
              { value: "On Track" },
            ],
            [
              { value: "Mobile App" },
              { value: "60%" },
              { value: "8/20" },
              { value: "In Progress" },
            ],
            [
              { value: "API Integration" },
              { value: "95%" },
              { value: "18/19" },
              { value: "Almost Done" },
            ],
            [
              { value: "Database Migration" },
              { value: "40%" },
              { value: "6/15" },
              { value: "In Progress" },
            ],
            [
              { value: "User Authentication" },
              { value: "100%" },
              { value: "10/10" },
              { value: "Completed" },
            ],
            [
              { value: "Payment Gateway" },
              { value: "75%" },
              { value: "9/12" },
              { value: "On Track" },
            ],
            [
              { value: "Analytics Dashboard" },
              { value: "30%" },
              { value: "3/10" },
              { value: "In Progress" },
            ],
            [
              { value: "Email Notifications" },
              { value: "90%" },
              { value: "9/10" },
              { value: "Almost Done" },
            ],
            [
              { value: "Admin Panel" },
              { value: "50%" },
              { value: "7/14" },
              { value: "In Progress" },
            ],
            [
              { value: "Performance Optimization" },
              { value: "20%" },
              { value: "2/10" },
              { value: "In Progress" },
            ],
            [
              { value: "Website Redesign" },
              { value: "85%" },
              { value: "12/15" },
              { value: "On Track" },
            ],
            [
              { value: "Mobile App" },
              { value: "60%" },
              { value: "8/20" },
              { value: "In Progress" },
            ],
            [
              { value: "API Integration" },
              { value: "95%" },
              { value: "18/19" },
              { value: "Almost Done" },
            ],
            [
              { value: "Database Migration" },
              { value: "40%" },
              { value: "6/15" },
              { value: "In Progress" },
            ],
            [
              { value: "User Authentication" },
              { value: "100%" },
              { value: "10/10" },
              { value: "Completed" },
            ],
            [
              { value: "Payment Gateway" },
              { value: "75%" },
              { value: "9/12" },
              { value: "On Track" },
            ],
            [
              { value: "Analytics Dashboard" },
              { value: "30%" },
              { value: "3/10" },
              { value: "In Progress" },
            ],
            [
              { value: "Email Notifications" },
              { value: "90%" },
              { value: "9/10" },
              { value: "Almost Done" },
            ],
            [
              { value: "Admin Panel" },
              { value: "50%" },
              { value: "7/14" },
              { value: "In Progress" },
            ],
            [
              { value: "Performance Optimization" },
              { value: "20%" },
              { value: "2/10" },
              { value: "In Progress" },
            ],
          ],
        }}
      />
    </WidgetWrapper>
  )
}

export const ExampleWidget4 = () => {
  return (
    <WidgetWrapper hPadding={0} vPadding={0}>
      Hello I'm example widget 4
    </WidgetWrapper>
  )
}
