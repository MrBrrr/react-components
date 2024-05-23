import { useState } from "react";
import Table from "./Table";

function TableSortable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;
  // const [data, config, keyFn] = [props.config, props.data, props.keyFn] // same as above ??

  const handleClick = (label) => {
    // if (sortBy === null) {
    //     //
    // }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
    console.log("sorting by", label, sortOrder);
  };

  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column, // all the keys and valus of existing column object
        header: () => (
          <th
            className="p-3 cursor-pointer"
            onClick={() => handleClick(column.label)}
          >
            {column.label} IS SORTABLE
          </th>
        ),
      };
    } else {
      return column;
    }
  });

  // Sort data only if sortOrder and sortBy are not null
  // Make a copy of data prop - sort function modify the original array
  // Find the correct sortValue function based on sortBy and use it to sort the data

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valA === "string") {
        return valA.localeCompare(valB) * reverseOrder;
      }
      return (valA - valB) * reverseOrder;
    });
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  );
}

export default TableSortable;
