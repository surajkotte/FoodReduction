import { useEffect } from 'react';
import '../minBlockcss/history.css';
import HistoryFoodComponent from './History_food_component';

function History(props){
    // useEffect((
    //     fetch("http://localhost:3000/requested").then((res)=>{
    //         console.log("History request");
    //         console.log(res.json().personalDetails);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // ),[])
    return (
        <div className="history">
            <span className='D'>D : Donated</span>
            <span className='R'>R : Requested</span>
            <div className='history-container'>
                <HistoryFoodComponent/>
                <HistoryFoodComponent/>
                <HistoryFoodComponent/>
                <HistoryFoodComponent/>
            </div>
        </div>
    );
}

export default History;