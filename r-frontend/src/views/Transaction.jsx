import Layout from "../layouts/Layout";
import Wallet from "../components/transactionComponent/Wallet";
import TransactionDetailDashboard from "../components/TransactionDetailDashboard";

const Transaction = ()=>{
    return(
        <Layout>
            <div>
                <div>
                    <h1>Find Your Transaction History</h1>
                    <p>Add Some goals that you want to achieve with your finances!</p>
                </div>
                <div>
                    <button>Filter</button>
                    <input type="text"/>
                </div>
                <div>
                    <Wallet></Wallet>
                </div>
                <div>
                    //Filter
                </div>
                <div>
                    <div>
                        <h1>Transaction History</h1>
                        <p>Preview all of your transaction</p>
                    </div>
                    <div>
                        <TransactionDetailDashboard></TransactionDetailDashboard>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Transaction;