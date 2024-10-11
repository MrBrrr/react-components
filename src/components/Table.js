import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    } else {
      return (
        <th key={column.label} className="p-3">
          {column.label}
        </th>
      );
    }
  });

  const renderedRows = data.map((row) => {
    const theRow = config.map((cellConfig) => {
      return (
        <td key={cellConfig.label} className="p-3">
          {cellConfig.render(row)}
        </td>
      );
    });
    return (
      <tr key={keyFn}>{theRow}</tr>
      // <td className="p-3"> {config[0].render(row)} </td>
      // <td className="p-3"> {config[1].render(row)} </td>
      // <td className="p-3"> {config[2].render(row)} </td>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2"> {renderedHeaders} </tr>
      </thead>
      <tbody> {renderedRows} </tbody>
    </table>
  );
}

export default Table;
