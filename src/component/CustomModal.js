import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const CustomModal = ({ title, studentData, handleModalClose }) => {
  const [name, setName] = useState("");
  const [p_email, setPEmail] = useState("");
  const [p_mobile, setPMobile] = useState("");
  const [child_class, setClass] = useState("");
  const history = useHistory()
  console.log(studentData)
  useEffect(()=>{
    if(studentData.child_name){
        setName(studentData.child_name)
    }
    if(studentData.parent_email){
        setPEmail(studentData.parent_email)
    }
    if(studentData.parent_mobile){
        setPMobile(studentData.parent_mobile)
    }
    if(studentData.enquired_class){
        setClass(studentData.enquired_class)
    }
  },[])

  const handleMove = () =>{
        history.push("/register")
  }
  return (
    <div>
      <div className="modal d-block" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleModalClose}
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="form-control my-3"
                placeholder="Child Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-control my-3"
                placeholder="Parent Email"
                value={p_email}
                onChange={(e) => setPEmail(e.target.value)}
              />
              <input
                className="form-control my-3"
                placeholder="Parent mobile number"
                value={p_mobile}
                onChange={(e) => setPMobile(e.target.value)}
              />
              <input
                className="form-control my-3"
                placeholder="Child  class"
                value={child_class}
                onChange={(e) => setClass(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleModalClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleMove}>
                Move
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
