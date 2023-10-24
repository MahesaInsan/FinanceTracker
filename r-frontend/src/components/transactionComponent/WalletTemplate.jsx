const WalletTemplate = ({name, number, expired})=>{
    return(
        <div className="w-[20rem] h-[12rem] flex flex-col p-4 justify-between border rounded-2xl bg-violet-300">
            <div>
                {name}
            </div>
            <div>
                <img src="https://seeklogo.com/images/C/Chip-logo-3C162A3B9B-seeklogo.com.png" alt="" className="h-[2rem]"/>
                <img src="" alt="" />
            </div>
            <div>
                {number}
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    Akang Dimas
                </div>
                <div>
                    {expired}
                </div>
            </div>
        </div>
    )
}

export default WalletTemplate