import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newStatus = { name, date };
    // console.log(status);
    setStatus([newStatus, ...status.slice(0, 4)]); // Keep only the last 5 statuses
    setName("");
  };

  return (
    <>
      <div className="container">
        <div className="header-container">
          <h2>We're All Mad Here...</h2>
          <h4>No, not at you.</h4>
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
          <p>
            {status.map((status, index) => (
              <span key={index}>
                {status.name} - {status.date.toString()}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
