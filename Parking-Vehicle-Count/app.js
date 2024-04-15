let carVal = 0;
let bikeVal = 0;
let scootyVal = 0;
let bicycleVal = 0;


function increaseCount(vehicle){
   
    if(vehicle=='car'){
        carVal += 1
    }else if(vehicle === 'bike'){
        bikeVal += 1;
    }else if(vehicle === 'scooty'){
        scootyVal += 1;
    }else{
        bicycleVal += 1
    }
    rootElement.render(< App />)
}
function decreaseCount(vehicle){

    if(carVal>0 && vehicle=='car'){
        carVal -= 1
    }else if(bikeVal>0 && vehicle === 'bike'){
        bikeVal -= 1;
    }else if(scootyVal>0 && vehicle === 'scooty'){
        scootyVal -= 1;
    }else if(bicycleVal>0 && vehicle === 'bicycle'){
        bicycleVal -= 1
    }   
    rootElement.render(< App />)

}

const Vehicle = ()=>(
    <>
        <ol>
            <li>
                <span>Car: {carVal}</span>
                <button className='btn btn-inc' onClick={()=>increaseCount('car')}>Increase</button>
                <button className='btn btn-dec' onClick={()=>decreaseCount('car')}>Decrease</button>
            </li>
            <li>
                <span>Bike: {bikeVal}</span>
                <button className='btn btn-inc' onClick={()=>increaseCount('bike')}>Increase</button>
                <button className='btn btn-dec' onClick={()=>decreaseCount('bike')}>Decrease</button>
            </li>
            <li>
                <span>Scooty: {scootyVal}</span>
                <button className='btn btn-inc' onClick={()=>increaseCount('scooty')}>Increase</button>
                <button className='btn btn-dec' onClick={()=>decreaseCount('scooty')}>Decrease</button>
            </li>
            <li>
                <span>Bicycle: {bicycleVal}</span>
                <button className='btn btn-inc' onClick={()=>increaseCount('bicycle')}>Increase</button>
                <button className='btn btn-dec' onClick={()=>decreaseCount('bicycle')}>Decrease</button>
            </li>
        </ol>
    </>
)

const App = ()=>(
    <>
        <h2>List of all the vehicles count in the parking.</h2>
        < Vehicle />
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(< App />)