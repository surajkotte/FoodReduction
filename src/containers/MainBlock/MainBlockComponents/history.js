import { useEffect,useState } from 'react';
import '../minBlockcss/history.css';
import HistoryFoodComponent from './History_food_component';

function History(){
    const [historyData, setHistoryData] = useState([]); 
    useEffect(()=>{
        fetch("http://localhost:3000/requested").then((res)=>{
            console.log("History request");
            res.json().then((data)=>{
                let arr=[...data]
                setHistoryData(arr);
            })

        })
        console.log(historyData)
    },[])
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