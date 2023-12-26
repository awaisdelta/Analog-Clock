import { useState, useEffect, useRef } from "react";
import './App.css';

function App() {
  const [sec, setSec] = useState()
  const secNeedleRef = useRef(null)

  useEffect(()=>{
    const secInterval = setInterval(() => {
      const date = new Date()
      setSec(date.getSeconds())
    }, 1000);
    return () => {
      clearInterval(secInterval)
    }
  }, [])
  

  useEffect(()=>{
    const degree = 360/60*sec
    secNeedleRef.current.style.transform = `rotate(${degree})`
  }, [sec])

  return (
    <div className="App">
      <div className="clock">
        <div className="hours"></div>
        <div className="minuts"></div>
        <div className="secends">
          <img ref={secNeedleRef} width="198px" height="9px" src='./clock-assets/sec-needle.png' />
        </div>
      </div>
    </div>
  );
}

export default App;