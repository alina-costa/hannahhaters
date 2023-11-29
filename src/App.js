import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = new Date();
    const date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    const time = d.getHours() + ":" + d.getMinutes();
    const newStatus = { name, date, time };
    setStatus([newStatus, ...status.slice(0, 4)]); // Keep only the last 5 statuses
    setName("");
  };

  return (
    <>
      <div className="container">
        <div className="header-container">
          <h4>Proof That No One Is Mad At You</h4>
          {/* <h4>No, not at you.</h4> */}
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Your Name Here"
              className="input-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button>Submit</button>
          </form>
        </div>
        <div className="last5">
          {status.map((status, index) => (
            <p key={index} className="status-container">
              {status.name}
              <span>
                {" "}
                is not mad at you as of <br />
              </span>
              {status.date.toString()}
              <span> at </span>
              {status.time.toString()}
              <br />
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
