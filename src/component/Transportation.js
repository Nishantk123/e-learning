import React from "react";
import SideNav from "./SideNav";

const TransPortation = () => {
  return (
    <div className="d-flex">
      <SideNav />
      <div className="w-100 p-3">
        <h3 className="text-center my-3">TransPortation</h3>
        <div className="row">
          <div className="col-sm-6 border-right text-center">
            <input className="form-control my-3" placeholder="Enter Name" />
            <input
              className="form-control my-3"
              placeholder="Enter mobile number"
            />
            <input className="form-control my-3" placeholder="Enter email id" />
            <input className="form-control my-3" placeholder="Enter email id" />
          </div>
          <div className="col-sm-6">
            <textarea
              className="form-control my-3"
              placeholder="Enter pickup address"
            />

            <textarea
              className="form-control my-3"
              placeholder="Enter drop address"
            />

            <input
              className="form-control my-3"
              placeholder="Enter area pincode"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end m-5">
            <button className="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  );
};

export default TransPortation;
