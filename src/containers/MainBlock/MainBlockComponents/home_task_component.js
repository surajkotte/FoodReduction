import './home_task_component.css';

function HomeTaskComponent(props){
    return (
        <div className="home-task-component">
            <div className='task-head'>
                <span className="task-heading">TASK</span>
                <span className="category">{props.task_obj.category}</span>
            </div>
            <div className="task-body">
                <span>{props.task_obj.text}</span>
            </div>
        </div>
    );
}

export default HomeTaskComponent;