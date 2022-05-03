import Navbar from './Navbar';
import Intro from './Intro';
import Info from './Info';
import Contact from './Contact';
import './style.css'
import Authentication from './Authentication';
function Home() {
  return (
      <div>
            <div className="" style={{position:"absolute",left:"0",right:"0"}}>
                  <div className="navbar-container" style={{paddingTop:"0px"}}>
                          <Navbar />
                  </div>

                  <div className="information-part">
                        <Intro />
                  </div>

                  <div className="container-fluid">
                         <Info />
                  </div>
                  <div className="container-fluid" id = "login" style = {{marginTop:"7rem",display: "flex",justifyContent: "center",alignItems: "center"}}>
                      <Authentication/>
                  </div>

                  <div className="" id = "bottom-section">
                           <Contact />
                  </div>
           </div>
       </div>
  );
}

export default Home;
