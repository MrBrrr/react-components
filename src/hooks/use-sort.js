import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSorting = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Sort data only if sortOrder and sortBy are not null
  // Make a copy of data prop - sort function modify the original array
  // Find the correct sortValue function based on sortBy and use it to sort the data

  let sortedData = data;
  console.log(sortedData);
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
  console.log(sortedData);
  return { sortOrder, sortBy, sortedData, setSorting };
}

export default useSort;
