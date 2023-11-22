import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const status = { name, date };
    console.log(status);
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
        <div className="last-5"></div>
      </div>
    </>
  );
}

export default App;
