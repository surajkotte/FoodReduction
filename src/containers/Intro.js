import React from 'react';
import IntroImg from "./IntroImg";

function Intro(){

 return (<div class="row container-fluid" style={{marginTop:"5rem"}}>
   <div className="col-lg-6 col-md-12 info">
     <span style={{fontFamily: "'Libre Barcode 128 Text', cursive",marginTop:"4rem",color:"#ff5f40"}}>Donate Food Everywhere</span>
     <span style={{fontSize:"1.4rem",marginBottom:"5rem",fontFamily: "'Quicksand', sans-serif"}}>we provide you the Opportunity to donate the excess food you have</span>
   </div>
   <div className="col-lg-6 col-md-12 img-1">
     <IntroImg />
     <span style={{fontFamily: "'Alata', sans-serif"}} className="welcome-text">welcome</span>
   </div>
 </div>);

}

export default Intro;
