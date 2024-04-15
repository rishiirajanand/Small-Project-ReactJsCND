let nameInput = React.createRef()
let marksInput = React.createRef()

let studentInfoArray = [];

function handleSubmit(event){
    event.preventDefault();

    studentInfoArray.push(`${nameInput.current.value},${marksInput.current.value}`)
    
    nameInput.current.value = "";
    marksInput.current.value = "";
    console.log(studentInfoArray);
    rootElement.render(<App />);
}

// Form Component
const Form = ()=>(
    <>
        <form onSubmit={handleSubmit}>
            <input ref={nameInput} placeholder='Name'/>
            <input ref={marksInput} placeholder='Marks'/>
            <button>Submit</button>
        </form>
    </>
)

// Table Component
const Table = ()=>(
    <>
        <table style={{border:'1px solid black'}}>
            <thead>
                <tr>
                    <th style={{border:'1px solid black'}}>Student's Name</th>
                    <th style={{border:'1px solid black'}}>Marks</th>
                </tr>
            </thead>
            <tbody>
                {studentInfoArray.map((data,index)=>(
                    <tr key={index}>
                        <td>{data.split(',')[0]}</td>
                        <td>{data.split(',')[1]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
)

// Main Stater App
const App = ()=>(
    <React.Fragment>
        <h1>Student's Form</h1>
        < Form />
        <br /><br />
        < Table />
    </React.Fragment>
)


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);