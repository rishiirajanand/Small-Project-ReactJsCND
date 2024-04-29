let seat = 25;

let guestCountRef = React.createRef();
let nameRef = React.createRef();
let mobileNumerRef = React.createRef();

let guestArr = [];
let currentTime;

let flag = false;

function getTime(){
    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let meridiem = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    currentTime = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
}

// Handle Click Event
function handleClick(event){
    if(seat >= guestCountRef.current.value){
        flag = false;
        getTime()

        seat -= guestCountRef.current.value;

        guestArr.push(`${guestCountRef.current.value},${nameRef.current.value},${mobileNumerRef.current.value},${currentTime}`)

        console.log(guestArr);

        guestCountRef.current.value = "";
        nameRef.current.value = "";
        mobileNumerRef.current.value = "";

        rootElement.render(< App />)
    }else{
        alert('Not found')
    }

}
function handleCheckout(event){
    flag = true;
    getTime();
    console.log(currentTime);
    rootElement.render(< App />)
}


// Input Component
const Input = ()=>(
    <>
        <input ref={guestCountRef} type="Number" placeholder="Guests Count"/><br />
        <input ref={nameRef} placeholder="Primary Guest Name"/><br />
        <input ref={mobileNumerRef} placeholder="Phone Number"/> <br /><br />

        <button onClick={handleClick}>Add Entry</button>
    </>
)

// Table Component
const Table = ()=>(
    <>
        <div className='table-box'>
            <table>
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Status</th>
                        <th>Remove Entry</th>
                    </tr>
                </thead>
                <tbody>
                    {guestArr.map((data, index)=>(
                            <tr key={index}>
                                <td>{data.split(',')[0]}</td>
                                <td>{data.split(',')[1]}</td>
                                <td>{data.split(',')[2]}</td>
                                <td>{data.split(',')[3]}</td>
                                <td>{ flag ? currentTime : '-' }</td>
                                <td onClick={handleCheckout}>{ flag ? 'Served' : 'Click to Checkout' }</td>
                                <td>Delete</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
)

function addDataToTable(){
    guestArr.map((data, index)=>(
        <tr key={index}>
            <td>{data.split(',')[0]}</td>
            <td>{data.split(',')[1]}</td>
            <td>{data.split(',')[2]}</td>
            <td>{currentTime = getTime()}</td>
            <td>hi</td>
            <td>hi</td>
            <td>hi</td>
        </tr>
    ))
}

// App Component
const App = ()=>(
    <>
        <h1>Total Capacity: 25</h1>
        <h2>Seats Left: {seat}</h2>
        < Input />
        < Table />
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(< App />)