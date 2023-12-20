import WalletDetail from "./WalletDetail";
import AddWallet from "../modals/AddWallet";
import { useState } from "react";

const Wallet = ()=>{    
    const [openModal, setOpenModal] = useState(false);

    return(
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                <div className="flex flex-col gap-2">
                    <p className="font-medium text-xl">Select Wallet</p>
                    <div className="flex gap-6 font-medium">
                        <button className="hover:text-[#3A89A0] hover:underline underline-offset-8">Card</button>
                        {/* <button className="hover:text-[#3A89A0] hover:underline underline-offset-8">E-Money</button> */}
                    </div>
                </div>
                <button className="p-2 border-2 rounded-xl text-medium border-[#3A89A0] text-[#3A89A0] w-full md:w-[10rem] lg:w-[16rem] font-medium hover:bg-[#3A89A0] hover:text-white" onClick={()=>setOpenModal(true)}>
                    Add Wallet
                </button>
                {openModal && <AddWallet setOpenModal={setOpenModal}/>}
            </div>
            <WalletDetail />
        </div>
    )
}

export default Wallet;