import Layout from "../layouts/Layout";
import Wallet from "../components/transactionComponent/Wallet";
import TransactionDetailDashboard from "../components/TransactionDetailDashboard";
import TransactionFilter from "../components/transactionComponent/TransactionFilter";

const Transaction = ()=>{
    return(
        <Layout>
            <div className="flex flex-col gap-8 mx-[8rem] mb-12">
                <div className="flex flex-col items-center">
                    <h1 className="font-medium text-xl">Find Your Transaction History</h1>
                    <p>Add Some goals that you want to achieve with your finances!</p>
                </div>
                <div className="flex justify-center gap-4">
                    <button className="border rounded-lg p-2 px-4">Filter</button>
                    <input type="text" className="rounded-md border"/>
                </div>
                <div>
                    <Wallet/>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-medium text-xl">Transaction History</h1>
                        <p>Preview all of your transaction</p>
                    </div>
                    <TransactionFilter/>
                    <div className="flex flex-col gap-2">
                        <TransactionDetailDashboard/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Transaction;