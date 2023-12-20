const WalletSelected = ({card})=>{   
    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    return(
        <div className="flex flex-col gap-4">
            <div className="w-full flex justify-between">
                <p>Type</p>
                <p>{card.type}</p>
            </div>
            <div className="w-full flex justify-between">
                <p>Number</p>
                <p>{card.number}</p>
            </div>
            <div className="w-full flex justify-between">
                <p>Expired Date</p>
                <p>{card.expiredDate}</p>
            </div>
            <div className="w-full flex justify-between font-bold">
                <p>Balance</p>
                <p>{"Rp " + numberWithCommas(card.balance)}</p>
            </div>
        </div>
    )
}

export default WalletSelected;