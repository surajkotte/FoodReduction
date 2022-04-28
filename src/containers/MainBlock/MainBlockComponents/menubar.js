import {NavLink} from 'react-router-dom';
import '../minBlockcss/menubar.css'

function Menubar(props){
    return (
        <div className="menubar">
            <i class="material-icons">restaurant</i>
            <span>Food Wastage Reduction</span>
            <NavLink to='/'><button><i class="fa fa-home fa-2x"></i> Home</button></NavLink>
            <NavLink to='/donationform'><button><i class="fa fa-wpforms fa-2x"></i> Donation Form</button></NavLink>
            <NavLink to='/history'><button><i class="fa fa-history fa-2x"></i> History</button></NavLink>
        </div>
    );
}

export default Menubar;