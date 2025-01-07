import React from "react";

export const Table = ({ taskList }) => {
  const entryList = taskList.filter((item) => item.type === "entry");

  const badList = taskList.filter((item) => item.type === "bad");
  return (
    <div className="row mt-5">
      <div className="col-md text-center">
        {/* <!-- Entry List --> */}
        <h3>Entry List</h3>
        <table className="table table-striped table-hover border">
          <tbody id="entryList">
            {entryList.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hr}</td>
                  <td className="text-end">
                    <button
                      onclick="handleOnDelete('${
                                  item.id
                                }')"
                      className="btn btn-danger"
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                    <button
                      onclick="switchTask('${
                                  item.id
                                }', 'bad')"
                      className="btn btn-success"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md text-center">
        {/* <!-- Bad List --> */}
        <h3>Bad List</h3>
        <table className="table table-striped table-hover border">
          <tbody id="badList">
            {badList.map((item, i) => {
              return (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hr}hr</td>
                  <td class="text-end">
                    <button
                      onclick="switchTask('${
                                        item.id
                                      }', 'entry')"
                      class="btn btn-warning"
                    >
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button
                      onclick="handleOnDelete('${
                                         item.id
                                       }')"
                      class="btn btn-danger"
                    >
                      <i class="fa-regular fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="alert alert-success">
          You could have saved= <span id="savedHrsElm">0</span> hrs
        </div>
      </div>
    </div>
  );
};
