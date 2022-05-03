import '../minBlockcss/donation_form.css';
import TimeField from 'react-simple-timefield';
import { useState } from 'react';
import context from '../../../context/auth-context';
import { useContext } from 'react';
import { useNavigate} from "react-router-dom";
function DonationForm(props){
    const userdefinednavigate=useNavigate();
    const ctx = useContext(context);
    const [ownerDetails,useOwnerDetails] = useState({
        userName : ctx.user,
        userID : ctx.userid
    })
    
    const [person_details,setPersonDetails]=useState({userId:ownerDetails.userID,Name:"",Quantity:"",Food:"",Time:"00:00:00",Mobile:"",State:"",City:"",DoorNumber:"",LandMark:"",reqType:"donated"});
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
            case 'State': setPersonDetails({...person_details,State:e.target.value})
            break;
            case 'City': setPersonDetails({...person_details,City:e.target.value})
            break;
            case 'Door Number' : setPersonDetails({...person_details,DoorNumber:e.target.value})
            break;
            case 'LandMark / Address' : setPersonDetails({...person_details,LandMark:e.target.value})
            break;
            default : console.log("default in switch case executed");
        }
    }
    function validate(person_details){
        var flag = true;
        var pattern = new RegExp(/^[0-9\b]+$/);
        if(person_details.Name.length==0){
            flag = false;
            alert("please enter a valid Name ");
            return false;
        }
        if(!pattern.test(person_details.Mobile)){
            flag = false;
            alert("Please enter valid phone number ");
            return flag;
        }else if(person_details.Mobile.length!=10){
            flag=false;
            alert("Please enter valid phone number");
            return flag;
        }
        if(person_details.State.length==0){
            flag = false;
            alert("Enter State name");
            return false;
        }
        if(person_details.City.length==0)
        {
            flag = false;
            alert("Enter City name");
            return false;
        }
        if(person_details.DoorNumber.length==0){
            flag = false;
            alert("Enter DoorNumber");
            return false;
        }
        return true;
    }
    const onClickHandler = async (event)=>{
        event.preventDefault();
        console.log(ownerDetails)
        console.log(ownerDetails.userID)
        setPersonDetails({...person_details,userId:ownerDetails.userID});
        console.log(person_details);
        if(validate(person_details)){
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
         })
         userdefinednavigate('/');
        }
        else{
            console.log("Not correct fields");
        }
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
            <input type="text" placeholder="Mobile" onChange={onChangeHandler} value={person_details.Mobile}></input>
            <input type="text" placeholder='State' onChange={onChangeHandler} value={person_details.State}/>
            <input type="text" placeholder='City' onChange={onChangeHandler} value={person_details.City}/>
            <input type='text' placeholder='Door Number' onChange={onChangeHandler} value={person_details.DoorNumber}/> 
            <input type="text" placeholder="LandMark / Address" onChange={onChangeHandler} value={person_details.LandMark}></input>
            <input type="text" placeholder="Food" onChange={onChangeHandler} value={person_details.Food}></input>
            <input type="number" placeholder="Quantity in Kg" onChange={onChangeHandler} value={person_details.Quantity}></input>
            <div className='time-details'>
            <label>Food Preparation Time : </label>
            <TimeField className="time-field" showSeconds value={person_details.Time} onChange={onTimeChangeHandler} style={{width:'5.2rem',marginLeft:'5px',backgroundColor:'none',borderWidth:'1px'}}/>
            </div>
            <button className="savebtn" onClick={onClickHandler}>Submit</button>
        </div>
        </div>
    );
}

export default DonationForm;