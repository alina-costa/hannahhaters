import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = new Date();
    const status = { name, d };
    console.log(status);
  };

  return (
    <>
      <div className="button-position">
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
            <p
              className="input-date"
              value={date}
              onSubmit={() => setDate(new Date())}
            ></p>
            <button>Submit</button>
          </form>
        </div>
        <p>{name}</p>
        {/* </div> */}
      </div>

      {/* <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Update</button>
      <button onClick={handleClearUpdates}>Clear Updates</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do </div> */}
    </>
  );
}

export default App;
