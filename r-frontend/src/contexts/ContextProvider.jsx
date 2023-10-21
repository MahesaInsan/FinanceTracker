import { createContext, useContext } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
    setUser: ()=>{},
    setToken: ()=>{}
})

export const ContextProvider = ({children})=>{
    const [user, setUser] = useState({})
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))

    const createToken = (token) =>{
        setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token)
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return(
        <StateContext.Provider value={{user, token, setUser, createToken}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext)