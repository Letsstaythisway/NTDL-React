import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTaskList = (taskObj) => {
    const obj = {
      ...taskObj,
      id: randomIdGenerator(),
      type: "entry",
    };
    setTaskList([...taskList, obj]);
  };

  const randomIdGenerator = (length = 6) => {
    const str =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

    let id = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      id += str[randomIndex];
    }
    return id;
  };

  return (
    <>
      {" "}
      <div className="wrapper pt-5">
        <div className="container">
          {/* <!-- title --> */}
          <h1 className="text-center">NOT TO DO LIST</h1>

          {/* <!-- form --> */}
          <Form addTaskList={addTaskList} />

          {/* <!-- Tables --> */}

          <Table taskList={taskList} />

          <div className="alert alert-success">
            Total Allocated Hours = <span id="ttlHrs">0</span> hrs
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
