import { ReactNode } from "react"

export const WidgetWrapper = ({
  children,
  hPadding,
  vPadding,
}: {
  children: ReactNode
  hPadding: number
  vPadding: number
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        paddingLeft: `${hPadding}px`,
        paddingRight: `${hPadding}px`,
        paddingTop: `${vPadding}px`,
        paddingBottom: `${vPadding}px`,
      }}
    >
      {children}
    </div>
  )
}
