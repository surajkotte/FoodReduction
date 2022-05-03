import '../minBlockcss/home.css';
// import HomeTaskComponent from './home_task_component';
import HomeFoodComponent from './Home_Food';
// import { elementAcceptingRef } from '@mui/utils';
import { useEffect, useState } from 'react';
import { ConnectedTvOutlined } from '@mui/icons-material';
function Home(props){
    const [donationData, setDonationData] = useState([]); 
    const [dataChange,setDataChange] = useState(true);
    // let arr1=[];
    // const [donationDetails , setDonationDetails]=useState([{  
    //       username : "",
    //       mobileNumber : "",
    //       state:"",
    //       city:"",
    //       doorNumber:"",
    //       landMark:"",
    //       foodName : "",
    //       foodQuantity : "",
    //       time : "",
    //       date : "",
    //       id:""
    // }])
    // const getFoodDetails = async ()=>{
    //     console.log("clicked")
    //     const data = await fetch("http://localhost:3000/food/global")
    //     .then((res)=>{
    //         console.log(res.json());
    //     })
    //     .catch((err)=>{
    //         console.log(err+" error");
    //     })
    // }
    // useEffect(getFoodDetails());
    function dataExpire(){
        console.log("previosData"+dataChange);
        setDataChange(!dataChange);
        
    }
    useEffect( async ()=>{
        await fetch("http://localhost:3000/food/global")
        .then((res)=>{
            console.log(res);
            res.json()
                .then((data)=>{
                    let arr=[...data]
                    console.log(arr);
                    setDonationData(arr);
                    console.log("data retrived successfully from db");
                })
        })
        console.log("useEffect "+dataChange);
    },[dataChange])
    return (
        <div className="home container-fluid" style={{alignItems:'center', marginTop:'3rem'}}>
            {
                donationData.map((Item,index)=>{
                    return (<HomeFoodComponent id={Item._id} userId = {Item.userId} mobileNumber={Item.mobileNumber} state={Item.state} city={Item.city} doorNumber={Item.doorNumber} landMark={Item.landMark} username={Item.username} foodName={Item.foodName} quantity={Item.foodQuantity} time={Item.time} date={Item.date} dataChange={dataExpire}/>);
                })
            }
        </div>
    );
}


export default Home;