import '../minBlockcss/history_food_compnent.css';

function HistoryFoodComponent(props){
    return (
        <div className='history-food-component'>
            <div className='big-letter'>
                <span>R</span>
            </div>
            <div className='history-details'>
                <div className='food-name'>
                    <span>Chicken Biryani</span>
                </div>
                <div className='food-specs'>
                    <div className='qt-dt'>
                        <span className='qt'>2 kg</span>
                        <span className='dt'>01/05/2022</span>
                    </div>
                    <div className='times'>
                        <span>Prepared Time : 00:00:00</span>
                        <span>Submitted Time : 00:00:00</span>
                    </div>
                </div>
                <div className='history-addr'>
                    <span>{"Hyderabad" + ", " + "Telangana"}</span>
                </div>
            </div>
        </div>
    );
}

export default HistoryFoodComponent;