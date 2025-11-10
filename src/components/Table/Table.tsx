import { type JSX, type ReactNode } from "react";
import "./Table.styles.css";

export interface TableProps {
  title: string;
  rows: Array<Array<{ value: string | ReactNode }>>;
  header: Array<{ value: string | ReactNode }>;
}

export const Table = (props: TableProps): JSX.Element => {
  return (
    <div>
      <div className="table__header">{props?.title}</div>
      <table className="table">
        <thead>
          <tr className="table__header-row">
            {props?.header?.map((d, idx) => (
              <th className="table__cell" key={`${d?.value}-${idx}`}>
                {d?.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__content">
          {props?.rows?.map((d, idx) => {
            return (
              <tr className="table__row" key={`content-row--${idx}`}>
                {d?.map((i, idx) => (
                  <td className="table__cell" key={`content-cell-${idx}`}>
                    {i.value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
