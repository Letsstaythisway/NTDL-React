import React from "react";

export const Table = () => {
  return (
    <div class="row mt-5">
      <div class="col-md text-center">
        {/* <!-- Entry List --> */}
        <h3>Entry List</h3>
        <table class="table table-striped table-hover border">
          <tbody id="entryList"></tbody>
        </table>
      </div>
      <div class="col-md text-center">
        {/* <!-- Bad List --> */}
        <h3>Bad List</h3>
        <table class="table table-striped table-hover border">
          <tbody id="badList"></tbody>
        </table>
        <div class="alert alert-success">
          You could have saved= <span id="savedHrsElm">0</span> hrs
        </div>
      </div>
    </div>
  );
};
