const WalletTemplate = ({card})=>{
    const cardColor = {
        backgroundColor: card.colour
    }

    function numberWithCommas(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
        <div className={`w-[20rem] h-[12rem] flex flex-col p-4 justify-between border rounded-2xl`} style={cardColor}>
            <div>
                {card.name}
            </div>
            <div>
                <img src="https://seeklogo.com/images/C/Chip-logo-3C162A3B9B-seeklogo.com.png" alt="" className="h-[2rem]"/>
                <img src="" alt="" />
            </div>
            <div>
                {card.number}
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    Rp. {numberWithCommas(card.balance)}
                </div>
                <div>
                    {card.expiredDate}
                </div>
            </div>
        </div>
    )
}

export default WalletTemplate