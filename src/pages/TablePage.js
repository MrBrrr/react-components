import Table from "../components/Table";

function TablePage() {
  // it's hardcoded now, but cpould be from anything: database, user input, etc
  const data = [
    { name: "orange", color: "bg-orange-500", score: 5 },
    { name: "apple", color: "bg-red-500", score: 51 },
    { name: "banana", color: "bg-yellow-500", score: 15 },
    { name: "lime", color: "bg-green-500", score: 25 },
  ];

  const config = [
    {
      label: "Fruit Name",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500">Score</th>,
    },
    // {
    //     label: "Length of the name",
    //     render: (fruit) => fruit.name.length,
    // },
    // {
    //     label: "Score squered",
    //     render: (fruit) => fruit.score ** 2,
    // },
  ];

  const keyFn = (fruit) => fruit.name;

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
