import WalletTemplate from "./WalletTemplate";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie"
import WalletSelected from "./WalletSelected";

const WalletDetail = ()=>{    
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState(null);
    const cookie = new Cookies()
    const chooseCard = async(card)=>{
        setCard(card);
    }

    useEffect(()=>{
        const fetchCards = async()=>{
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/cards",{
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer ' + cookie.get("jwt")
                    }
                });
                setCards(response.data.cards)
              } catch (error) {
                console.log("failed")
                console.log(error.response); // This should be 401 if unauthorized
            }
        }

        fetchCards()
    }, [])

    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-4 mb-4">
                {cards?.map((card) => (
                    <button className="text-left" onClick={() => chooseCard(card)}>
                        <WalletTemplate key={card.id} card={card}/>
                    </button>
                ))}
            </div>
            <div className="flex flex-col">
                <div className="flex justify-between border-b border-r p-3 shadow-md">
                    <div className="flex flex-row gap-2">
                        <div>   
                            <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/creditcard_120378.png" alt="" className="h-[1.5rem]"/>
                        </div>
                        <div>
                            {card && card.name}
                        </div>
                    </div>
                    <div className="flex flex-row">
                        Details
                        <div>
                            <img src="https://static.thenounproject.com/png/1123247-200.png" alt="" className="h-[1.5rem]"/>
                        </div>
                    </div>
                </div>
                <div className="border-b border-r p-3 shadow-md">
                    {card && <WalletSelected card = {card}/>}
                </div>
            </div>
        </div>
    )
}

export default WalletDetail;