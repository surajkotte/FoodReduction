import './css/homepage.css'
import NavigationComponent from './containers/NavigationComponent';
import {AuthContextProvider} from './context/auth-context';
// import MainHomeNavigation from './containers/MainBlock/MainHomeNavigation'
// import { CookiesProvider } from 'react-cookie';
function App() {
  return (
      <AuthContextProvider>
        
        <NavigationComponent/>
      
    </AuthContextProvider>
  );
}

export default App;
