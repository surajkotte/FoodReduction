import '../minBlockcss/home_food_component.css';
import {useState,useRef} from 'react';
import MyTimer from '../MainBlockComponents/my_timer';
import { useNavigate} from "react-router-dom";
function HomeFoodComponent(props){
    const userdefinednavigate=useNavigate();
    const [requested,setRequest]=useState(false);
    var exp_time_sec;
    const time = new Date();
    const cancel_time=new Date();

    function calculateTime(){
        const d = new Date();
        let submission_time = d.toTimeString().substring(0,8);
        let prepared_time="13:00:00";
        let submission_time_seconds=parseInt(submission_time.substring(0,2))*60*60 + parseInt(submission_time.substring(3,5))*60 + parseInt(submission_time.substring(6,8));
        let prepared_time_seconds=parseInt(prepared_time.substring(0,2))*60*60 + parseInt(prepared_time.substring(3,5))*60 + parseInt(prepared_time.substring(6,8));
        let time_diff=submission_time_seconds-prepared_time_seconds;
        exp_time_sec=8*60*60 - time_diff;
        time.setSeconds(time.getSeconds() + exp_time_sec);
        // console.log(time);
        cancel_time.setSeconds(cancel_time.getSeconds() + 5*2);
    }
    let onTimerExpired=async ()=>{
        console.log("timer expired");
        let path = 'http://localhost:3000/food/delete/'+props.id;
        const data = await fetch(path).then(props.dataChange());
        
    //    userdefinednavigate('/donationform');
    //    userdefinednavigate('/');
    }
    //one request button time out
    let onCancelTimerExpired= async ()=>{

        console.log(props.id);
        console.log(props.username);
        console.log(props.mobileNumber);
        console.log(props.state);
        console.log(props.city);
        console.log(props.doorNumber);
        console.log(props.landMark);
        console.log(props.foodName);
        console.log(props.quantity);
        console.log(props.time);
        console.log(props.date)
        console.log("cancel Timer Expired");
        const data1 = await fetch("http://localhost:3000/food/new/request", {
            method: "POST",
            headers:{
              "Content-Type":"application/json",
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
              text:{
                  userID:props.userId,
                  username:props.username,
                  mobileNumber : props.mobileNumber,
                  state:props.state,
                  city:props.city,
                  doorNumber:props.doorNumber,
                  landMark:props.landMark,
                  foodName : props.foodName,
                  foodQuantity : props.quantity,
                  time : props.time,
                  date:props.date,
                  reqType:"requested"
              }
            }
            )
          }).then(console.log("data updated with request param "))
          let path = 'http://localhost:3000/food/delete/'+props.id;
          const data = fetch(path).then(
              props.dataChange()
          );
         }

    function onRequestFood(){
        setRequest(true);
        console.log("requested");
        console.log(props.id+" "+props.index+" "+props.foodName);
        console.log(exp_time_sec+" "+cancel_time) ;
    }
    function onCancelRequest(){
        setRequest(false);
        console.log("reqest cancelled")
    }
    
    return (
        <div className="home-food-component">
            <div className='food-details'>
                <span className='food-name'>{props.foodName}</span>
                <span className='quantity'>{props.quantity} Kg</span>
            </div>
            <div className='addr'>{props.city+" , "+props.state}</div>
            <div className='food-component-footer'>
                {calculateTime()}
                <span className='timer'>Food Spoils in  <MyTimer expiryTimestamp={time} expiryFunction={onTimerExpired}/></span>
                {!requested && <button className='req-food' onClick={onRequestFood}>Request Food</button>}
                {requested && <button className='cancel-req' onClick={onCancelRequest}>Cancelable <MyTimer expiryTimestamp={cancel_time} expiryFunction={onCancelTimerExpired}/></button>}
            </div>
        </div>
    );
}

export default HomeFoodComponent;