const TransactionFilter = () =>{
    return(
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-4">
                <p>Start Date</p>
                <input type="date" name="" id="" className="border p-2 rounded-lg"/>
            </div>
            <div className="flex flex-col gap-4">
                <p>End Date</p>
                <input type="date" name="" id="" className="border p-2 rounded-lg"/>
            </div>
            <div className="flex flex-col gap-4">
                <p>Select Category</p>
                <input type="text" name="" id=""  className="border p-2 rounded-lg"/>
            </div>
            <div className="flex items-center">   
                <button className="p-2 px-4 border rounded-lg">Apply</button>
            </div>
        </div>
    )
}

export default TransactionFilter