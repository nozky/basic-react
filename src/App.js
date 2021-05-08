
import React,{ useState, useEffect } from 'react';
import './App.css';

import Timer from './components/Timer' 


function App() {

  // hooks useState
  const [lists, setLists] = useState([])
  const [message, setMessage] = useState('')


  //function to handle input text, "e" is event, please learn about event in javascript
  const inputMessageHandle =(e)=>{
    setMessage(e.target.value)
  }

  //function to add note to lists
  const addToNote =()=>{
    if(!message) return
    setLists((prevState)=> ([...prevState, {id: new Date().getTime().toString(), message}]))
    setMessage('')
  }

  const removeFromList =(id)=>{
    const newData = lists.filter((item)=>{
      return (id !== item.id)
    })

    setLists(newData)
  }

  //hooks useEffect
  //test the effect , "[]" means no dependency, it only run during component mount. 
  // you can try 
  useEffect(()=>{ console.count('effect - no dependency') },[])

  //This one has dependency, it gonna trigger when "lists" state is change.
  useEffect(()=>{ console.count('effect with list dependency') },[lists])

  // this will trigger everytime if any state change
  useEffect(()=>{ console.count('effect - every time') })

  console.log(lists)
  return (

    <>
    <header>
      <h3>Notes</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </header>

    <div className="main-wrapper">
     
      <main>
        <h5 className='center-div'>List of notes</h5>
        <ul className='list-items'>
          {/* dynamic content */}
          {lists.map((note)=> {
            return (
              <>
                <li key={note.id} className='list-item'>
                  ID: {note.id} --  Messages: {note.message} 
                  <button className='list-btn' onClick={()=> removeFromList(note.id)}>Delete</button>
                </li>
              </>
            )
          })}
        </ul>
      </main>
    </div>

    <div className="btn-container">
      <button className='btn' onClick={()=>{ addToNote() }}>Add</button>
      <input className='input' type="text" placeholder='Enter Note' value={message} onChange={(e)=>{ inputMessageHandle(e) }}  />
    </div>

    <div className="underline"></div>
    <Timer />  
   

    <footer>
      <p>2021 React Practice Project</p>
    </footer>
    </>

  );
}



export default App;
