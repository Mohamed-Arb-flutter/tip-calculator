import { useState } from 'react'
import './App.css'

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState(1);

  const billAmount = Number(bill);
  const tipAmount = billAmount * tip / 100;
  const total = billAmount + tipAmount;
  const perPerson = total / people;

  function handleReset() {
    setBill('');
    setTip('');
    setPeople(1);
  }

  return (
    <div className="app-wrapper">
      <div className="card">
        <h2 className="title">Tip & Split Calculator</h2>

        <div className="input-group">
          <label>Bill Amount</label>
          <input 
            type="number" 
            placeholder="Enter your bill" 
            value={bill} 
            onChange={(e) => setBill(e.target.value)} 
          />
        </div>

        <div className="input-group">
          <label>Select Tip %</label>
          <div className="tip-grid">
            <button 
              className={tip == 10 ? "tip-btn active" : "tip-btn"} 
              onClick={() => setTip(10)}
            >
              10%
            </button>
            <button 
              className={tip == 15 ? "tip-btn active" : "tip-btn"} 
              onClick={() => setTip(15)}
            >
              15%
            </button>
            <button 
              className={tip == 20 ? "tip-btn active" : "tip-btn"} 
              onClick={() => setTip(20)}
            >
              20%
            </button>
            <input 
              type="number" 
              placeholder="Custom %" 
              value={tip} 
              onChange={(e) => setTip(e.target.value)} 
            />
          </div>
        </div>

        <div className="input-group">
          <label>Number of People</label>
          <div className="people-box">
            <button onClick={() => { if (people > 1) { setPeople(people - 1) } }}>-</button>
            <span>{people}</span>
            <button onClick={() => setPeople(people + 1)}>+</button>
          </div>
        </div>

        <div className="result-box">
          <span>Per Person</span>
          <p>{perPerson.toFixed(2)}</p>
        </div>

        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App