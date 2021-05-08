import React, { useState, useEffect } from 'react'

function Timer({sec}) {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hours, setHours] = useState(0)
  const [cron, setCron] = useState(null)

  const timer =()=> {
     let newCron = setInterval(()=>{ setSecond((prevSec)=> prevSec + 1) },1000)
     setCron(prev => prev = newCron)
  }

  const pause =()=> {
    clearInterval(cron)
  }

  const reset =()=> {
    setSecond(0)
    setMinute(0)
    setHours(0)
  }

  useEffect(()=>{
    console.log('timer effect')

    if(second >= 60){
      setMinute((prevMinute)=> prevMinute + 1)
      setSecond((prevSec)=> prevSec = 0)
    } 

    if(second >=60 ){
      setHours(h => h + 1)
      setMinute(m => m = 0)
      setSecond(s => s = 0)
    }
  },[second])

  console.log(cron)
  return (
    <>
      <h1 className='center-div'>Timer</h1>
      <h3 className='title center-div'>{`Hour: ${hours} Minute: ${minute} Second:${second}` }</h3>
      <div className="btn-container center-div">
        <button className='btn' onClick={()=>{ timer() }}>Start</button>
        <button className='btn' onClick={()=> { pause() }}>Pause</button>
        <button className='btn' onClick={()=> { reset() }}>Reset</button>
      </div>
    </>
  )
}

export default Timer
