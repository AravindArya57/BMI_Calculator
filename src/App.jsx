import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [Height, setHeight] = useState("")
  const [Weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState('')
  const [errorStatus, setErrorStatus] = useState('')

  const bmiCalculator = ()=>{
    if(Height && Weight){
      const heightInMeters = Height / 100;
      const bmiValue = Weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5){
        setStatus("Under Weight");
      }else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setStatus("Normal Weight");
      }else if(bmiValue >= 24.9 && bmiValue < 29.9){
        setStatus("Over Weight");
      }else{
        setStatus("Obese");
      }
      setErrorStatus("")
    }else{
      setBmi(null);
      setStatus("");
      setErrorStatus("Please ensure the correct value")
    }
    
  }
  return (
    <>
      <h1>BMI Calculator</h1>
      {errorStatus && <p className='text-danger'>{errorStatus}</p>}
      <div className='row p-2'>
        <label htmlFor='height'>Height (cm)</label>
        <input type="text" name='height' onChange={(e)=>setHeight(e.target.value)} value={Height}/>
      </div>
      <div className='row p-2'>
        <label htmlFor='weight'>Weight (kg)</label>
        <input type="text" name='weight' onChange={(e)=>setWeight(e.target.value)} value={Weight}/>
      </div>
      <div className='row p-2'>
         <button className='btn btn-success' onClick={bmiCalculator}>Calculate BMI</button>
      </div> 
      {bmi !== null && <div className='row p-2'>
        <p>Your BMI is: {bmi}</p>
        <p>Status : {status}</p>
        </div>}


    </>
  )
}

export default App;
