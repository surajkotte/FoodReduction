import Home from './home';
import { useContext } from 'react';
import context from '../context/auth-context';
import MainHome from './MainBlock/MainBlockComponents/MainHomeNavigation'
import {Routes,Route} from 'react-router-dom';
const NavigationComponent = ()=>{
    const ctx = useContext(context);
    console.log(ctx);
    return(
        <>
        {/* <Routes>
      {!ctx.isLoggedin && <Route path='/' element={<Home/>}/>}
      {ctx.isLoggedin && <Route path='/main' element={<MainHome/>}/>}
    </Routes> */}
          {!ctx.isLoggedin &&  <Home/> }
          {ctx.isLoggedin && <MainHome/>}
        </>
    )
}

export default NavigationComponent;