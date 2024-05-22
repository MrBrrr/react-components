import Table from "../components/Table";

function TablePage() {

    // it's hardcoded now, but cpould be from anything: database, user input, etc 
    const data = [
        {name: "orange", color: "bg-orange-500", score: 5},
        {name: "apple", color: "bg-red-500", score: 51},
        {name: "banana", color: "bg-yellow-500", score: 15},
        {name: "lime", color: "bg-green-500", score: 25},
    ]

    return(
        <div>
            <Table data={data}/>
        </div>
    )
}

export default TablePage;
