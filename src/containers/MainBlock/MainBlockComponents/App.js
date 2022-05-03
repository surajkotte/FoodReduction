import '../minBlockcss/App.css'
import {Routes,Route} from 'react-router-dom';
import Menubar from './menubar';
import Home from './home';
import DonationForm from './donation_form';
import History from './history';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/donationform' element={<DonationForm/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
    </div>
  );
}

export default App;
