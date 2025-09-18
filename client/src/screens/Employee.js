import React from "react";

function Employee() {
  return (
    <>
      <h2 className="text-info">Employee Page</h2>
      <div className="row p-2 m-2 border">
        <div className="col-9">
          <h2 className="text-primary text-left">Employee List</h2>
        </div>
        <div className="col-3">
          <button
            className="btn btn-info form-control"
            data-target="#newEmployee"
            data-toggle="modal"
          >
            Add New Employee
          </button>
        </div>
      </div>
      <div className="border p-2 m-2">
        <table className="table table-striped table-bordered table-active">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>
      {/* New Employee */}

      <div class="modal" tabindex="-1" role="dialog" id="newEmployee">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-info">
              <h5 class="modal-title text-white">New Employee</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group row">
                <label className="col-4">Name</label>
                <div className="col-8">
                  <input type="text" name="name" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-4">Address</label>
                <div className="col-8">
                  <input type="text" name="address" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-4">Salary</label>
                <div className="col-8">
                  <input type="text" name="salary" className="form-control" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
              >
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
