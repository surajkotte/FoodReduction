import Navbar from './Navbar';
import Intro from './Intro';
import Info from './Info';
import Contact from './Contact';
import './style.css'
import Authentication from './Authentication';
import {BrowserRouter as Router, Switch , Route, Redirect, NavLink} from 'react-router-dom';
function Home() {
  return (
      <div>
            <div className="" style={{position:"absolute",left:"0",right:"0"}}>
                  <div class="navbar-container" style={{paddingTop:"0px"}}>
                          <Navbar />
                  </div>

                  <div class="information-part">
                        <Intro />
                  </div>

                  <div class="container-fluid">
                         <Info />
                  </div>
                  <div className="container-fluid" id = "login" style = {{marginTop:"7rem",display: "flex",justifyContent: "center",alignItems: "center"}}>
                      <Authentication/>
                  </div>

                  <div class="" id = "bottom-section">
                           <Contact />
                  </div>
           </div>
           </div>
  );
}

export default Home;
