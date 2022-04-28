import '../minBlockcss/donation_form.css';
import TimeField from 'react-simple-timefield';
import { useState } from 'react';
import context from '../../../context/auth-context';
import { useContext } from 'react';
function DonationForm(props){
    const ctx = useContext(context);

    console.log("here");
    console.log(ctx);
    const [person_details,setPersonDetails]=useState({userId:"",Name:"",Quantity:"",Food:"",Time:"00:00",Mobile:"",Address:""});

    function onChangeHandler(e){
        switch(e.target.placeholder){
            case 'Name': setPersonDetails({...person_details,Name:e.target.value})
            break;
            case 'Quantity in Kg': setPersonDetails({...person_details,Quantity:e.target.value})
            break;
            case 'Food': setPersonDetails({...person_details,Food:e.target.value})
            break;
            case 'Mobile': setPersonDetails({...person_details,Mobile:e.target.value})
            break;
            case 'Address': setPersonDetails({...person_details,Address:e.target.value})
            break;
            default : console.log("default in switch case executed");
        }
    }
    const onClickHandler = async (event)=>{
        event.preventDefault();
        console.log(ctx.userid+" "+ctx.user);
        var x={...person_details,userId:ctx.userid}
        if(person_details.userId===""){
            x={...person_details,userId:ctx.userid}
        }
        setPersonDetails(x)
        console.log(person_details);
        const data = await fetch("http://localhost:3000/food/new", {
           method: "POST",
           headers:{
             "Content-Type":"application/json",
             "Access-Control-Allow-Origin": "*"
           },
           body: JSON.stringify({
             text:person_details
           }
           )
         }).then(
             setPersonDetails({userId:"",Name:"",Quantity:"",Food:"",Time:"00:00",Mobile:"",Address:""})
             
         )
    }
    function onTimeChangeHandler(event,time){
        setPersonDetails({...person_details,Time:time})
    }

    return (
        <div className="donation-form">
            {/* <Form/> */}
            <div className='form'>
            <span className='heading'>Details Form</span>
            <input type="text" placeholder="Name" onChange={onChangeHandler} value={person_details.Name}></input>
            <input type="number" placeholder="Mobile" onChange={onChangeHandler} value={person_details.Mobile}></input>
            <input type="text" placeholder="Address" onChange={onChangeHandler} value={person_details.Address}></input>
            <input type="text" placeholder="Food" onChange={onChangeHandler} value={person_details.Food}></input>
            <input type="number" placeholder="Quantity in Kg" onChange={onChangeHandler} value={person_details.Quantity}></input>
            <div className='time-details'>
            <label>Food Preparation Time : </label>
            <TimeField className="time-field" value={person_details.Time} onChange={onTimeChangeHandler} />
            </div>
            <button className="savebtn" onClick={onClickHandler}>Submit</button>
        </div>
        </div>
    );
}

export default DonationForm;