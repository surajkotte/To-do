import Home from './home';
import { useContext } from 'react';
import context from '../context/auth-context';
import MainHome from './MainBlock/MainBlockComponents/MainHomeNavigation'
const NavigationComponent = ()=>{
    const ctx = useContext(context);
    console.log(ctx);
    return(
        <>
          {!ctx.isLoggedin &&  <Home/> }
          {ctx.isLoggedin && <MainHome/>}
        </>
    )
}

export default NavigationComponent;