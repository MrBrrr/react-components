import { GoArrowUp, GoArrowDown } from "react-icons/go";

import Table from "./Table";
import useSort from "../hooks/use-sort";

function TableSortable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSorting } = useSort(data, config);
  console.log(sortedData);
  const getIcons = (sortableCol) => {
    if (sortableCol === sortBy) {
      if (sortOrder === "asc") {
        return (
          <div>
            <GoArrowUp />
          </div>
        );
      } else if (sortOrder === "desc") {
        return (
          <div>
            <GoArrowDown />
          </div>
        );
      }
    }
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  };

  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column, // all the keys and valus of existing column object
        header: () => (
          <th
            className="p-3 cursor-pointer flex item-center cursor-pointer hover:bg-gray-200"
            onClick={() => setSorting(column.label)}
          >
            {getIcons(column.label)}
            {column.label}
          </th>
        ),
      };
    } else {
      return column;
    }
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default TableSortable;
