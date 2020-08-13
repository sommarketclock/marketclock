import React from "react";
import "./App.css";
import Clock from "react-live-clock";

export default function App() {
  return (
    <div className="App">
      <div className='TimeRow'>
        <div className="TimeDate">
          <h1>NEW YORK</h1>
          <br />
          <Clock
            id={"Time"}
            format={"HH:mm"}
            timezone={"US/Eastern"}
            ticking={true}
            style={{ "fontSize": "14em" ,"font-family": 'digital-7'}}
          />
        </div>
        <div className="TimeDate">
          <h1>LONDON</h1>
          <br />
          <Clock
            id={"Time"}
            format={"HH:mm"}
            timezone={"Europe/London"}
            ticking={true}
            style={{ "fontSize": "14em" ,"font-family": 'digital-7'}}
            
          />
        </div>
        <div className="TimeDate">
          <h1> HONG KONG</h1>
          <br />
          <Clock
            id={"Time"}
            format={"HH:mm"}
            timezone={"Asia/Hong_Kong"}
            ticking={true}
            style={{ "fontSize": "14em" ,"font-family": 'digital-7'}}
          />
        </div>
      </div>
    </div>
  );
}
