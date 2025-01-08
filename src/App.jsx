import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";

const hrPerWeek = 24 * 7;

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskList = (taskObj) => {
    const obj = {
      ...taskObj,
      id: randomIdGenerator(),
      type: "entry",
    };

    if (ttlHr + taskObjHr > hrPerWeek) {
      return alert("SOrry boss dont have enough time to finish this task.");
    }
    setTaskList([...taskList, obj]);
  };

  const switchTask = (id, type) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
          item.type = type;
        }
        return item;
      })
    );
  };

  const handleOnDelete = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
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

  const ttlHr = taskList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

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

          <Table
            taskList={taskList}
            switchTask={switchTask}
            handleOnDelete={handleOnDelete}
          />

          <div className="alert alert-success">
            Total Allocated Hours = <span id="ttlHrs">{ttlHr}</span> hrs
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
