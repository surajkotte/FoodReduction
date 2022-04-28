import '../minBlockcss/home.css';
// import HomeTaskComponent from './home_task_component';
import readingBoy from './task_reading_boy.jpg';

function Home(props){
    return (
        <div className="home">
            <span className="pname">Hii {"Suraj"},</span>
            <span className="some-text">Hungry ? Take a look at food Items.</span>
            <div className="home-tasks-container">
                {/* {(props.store_todo_array.length!==0)&&props.store_todo_array.map((obj)=>{
                        return (<HomeTaskComponent key={obj.creation_date} task_obj={obj}/>)
                        })
                } */}
            </div>
            <img src={readingBoy} alt="boy" />
        </div>
    );
}


export default Home;