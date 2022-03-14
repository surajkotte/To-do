import { useContext } from "react";
import '../minBlockcss/userComponent.css';
import AuthContext from '../../../context/auth-context'
const UserName=()=>{
    const ctx = useContext(AuthContext);
    return(
        <div className="userBackground">
            <p>{ctx.user.substring(0,1).toUpperCase()}</p>
        </div>
    )
}

export default UserName;