
// import {Routes,route} from 'react-router-dom'
import '../minBlockcss/App.css';
import { useContext } from 'react';
import {Routes,Route} from 'react-router-dom';
import Menubar from './menubar';
import Home from './home';
import DonationForm from './donation_form';
import History from './history';
import context from '../../../context/auth-context';
const MainHomeNavigation = () => {
  const ctx = useContext(context);
  console.log(ctx);
  return (
    <div className="App">
    <Menubar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/donationform' element={<DonationForm/>}/>
      <Route path='/history' element={<History/>}/>
    </Routes>
  </div>
  );
};
export default MainHomeNavigation;
