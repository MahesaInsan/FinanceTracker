import Layout from "../layouts/Layout";
import Wallet from "../components/transactionComponent/Wallet";
import TransactionFilter from "../components/transactionComponent/TransactionFilter";
import TransactionHistoryDashboard from "../components/dashboard/TransactionHistoryDashboard";
import AddButton from "../components/layoutComponent/AddButton";

const Transaction = () => {
  return (
    <Layout>
      <AddButton />
      <div className="flex flex-col gap-12 md:gap-8 mx-[5%] lg:mx-[15%] mb-12">
        <div className="flex flex-col items-center">
          <h1 className="font-medium text-xl">Find Your Transaction History</h1>
          <p className="text-center">Add Some goals that you want to achieve with your finances!</p>
        </div>
        {/* <div className="flex justify-center gap-4">
          <button className="border rounded-lg p-2 px-4">Filter</button>
          <input type="text" className="rounded-md border" />
        </div> */}
        <div>
          <Wallet />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-xl">Transaction History</h1>
            <p>Preview all of your transaction</p>
          </div>
          {/* <TransactionFilter /> */}
          <div className="flex flex-col gap-2">
            <TransactionHistoryDashboard />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transaction;
