import WalletDetail from "./WalletDetail";

const Wallet = ()=>{    
    return(
        <div className="flex flex-col gap-4">
            <p className="font-medium text-xl">Select Wallet</p>
            <div className="flex gap-6 font-medium">
                <button className="hover:text-[#3A89A0] hover:underline underline-offset-8">Card</button>
                {/* <button className="hover:text-[#3A89A0] hover:underline underline-offset-8">E-Money</button> */}
            </div>
            <WalletDetail />
        </div>
    )
}

export default Wallet;