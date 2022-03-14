
import '../css/nav.css';
import imgage from '../images/icon.svg';
const navBar=()=>{
    return(
        <div>
                <nav>
        <input type="checkbox" id="check"/><label className="checkbutton" htmlFor="check"><i className="fas fa-bars"></i></label>
        <img src={imgage} alt="logo" style={{height:'48px',width: '42px',marginLeft: '15px'}}/><label className="label" style={{position: 'absolute',marginLeft: '5px'}}>To-Do</label>
            <ul>
                <li><a href="#next">About</a></li>
                <li><a href="/">ContactUs</a></li>
                <li><a href='/#log'>Login/Signup</a></li>
            </ul>

        </nav>
        
        </div>
    )
}
export default navBar