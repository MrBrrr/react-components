function Table({data}) {
const renderedRows = data.map((row) => {
        return (
            <tr key={row.name}>
                <td className="p-3">{row.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${row.color}`}></div>
                </td>
                <td className="p-3">{row.score}</td>
            </tr>
        )
    })

    return (
        // <div>
        //     {data.length}
        // </div>
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    <th> Fruit </th>
                    <th> Color </th>
                    <th> Score </th>
                </tr>
            </thead>
            <tbody> {renderedRows} </tbody>
        </table>
    )

}

export default Table;
