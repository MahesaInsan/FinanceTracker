import { useStateContext } from "../contexts/ContextProvider"

const DefaultLayout = ()=>{
    const {token} = useStateContext()
    
    if(!token){
        return <Navigate to='/login'/>
    }

    return(
        <div>
            
        </div>
    )
}

export default DefaultLayout