let nameRef =  React.createRef()
let quoteRef =  React.createRef()

let quoteArr = [];

function handleEvent(event){
    if(event.key == 'Enter'){

        quoteArr.push(`${nameRef.current.value},${quoteRef.current.value}`);

        nameRef.current.value = "";
        quoteRef.current.value = "";
        rootElement.render(< App />)
    }
}

const Input = ()=>(
    <>
        <input ref={nameRef} placeholder='Name'/>
        <br /><br />
        <input ref={quoteRef} onKeyPress={handleEvent} placeholder='Quote'/>
    </>
)



const App = ()=>(
    <>  
        <h1 className='heading'>Quotify</h1>
        <div id='main'>
            < Input />
            
            {quoteArr.map((data, index)=>(
                <div key={index} className='quote-container'>
                    <i>"{data.split(',')[0]}"</i>
                    <b>~ {data.split(',')[1]}</b>
                </div>  
            ))}
        </div>
    </>
)

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(< App />)