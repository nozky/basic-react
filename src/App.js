
import './App.css';
import React,{ useState, useEffect } from 'react';



function App() {

  const [lists, setLists] = useState([])
  const [message, setMessage] = useState('')


  const inputMessageHandle =(e)=>{
    setMessage(e.target.value)
  }

  const addToNote =()=>{
    setLists((prevState)=> ([...prevState, message]))
  }


  useEffect(()=>{ console.count('effect') })

  return (

    <>
    <header>
      <h3>Notes</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </header>

    <div className="main-wrapper">
     
      <main>
        <h5>List of notes</h5>
        <ul className='list-items'>
          {/* dynamic content */}
          {lists.map((note,index)=> {
            return <li key={index} className='list-item'>{note}</li>
          })}
        </ul>
      </main>
    </div>

    <div className="btn-container">
      <button className='btn' onClick={()=>{ addToNote() }}>Add</button>
      <input className='input' type="text" placeholder='Enter Note' onChange={(e)=>{ inputMessageHandle(e) }} />
    </div>

    <footer>
        <p>2021 React Practice Project</p>
      </footer>
    </>

  );
}



export default App;
