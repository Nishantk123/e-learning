import React, { useState } from "react";
import CustomModal from "./CustomModal";
import SideNav from "./SideNav";

const Enquiry = () => {
  const enquiryData = [
    {
      parent_name: "test",
      child_name: "test2",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
    {
      parent_name: "test",
      child_name: "test2",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
    {
      parent_name: "test",
      child_name: "test2",
      parent_mobile: "898989898",
      enquired_class: "1",
      parent_email: "test@gmail.com",
    },
  ];
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({})

  const handlePageMove = (data) =>{
    setShow(true)
    setSelectedStudent(data)
  }
  const handleModalClose = () =>{
    setShow(false)
  }
  return (
    <div className="d-flex">
      <SideNav />
      <div className="w-100 p-3">
        {enquiryData.map((data, index) => {
          return (
            <div className="list" key={index}>
              <div className="img-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWC-gNXo5Wd22oY8_BGdHdlMLHcMXvWPWVA&usqp=CAU"
                  className="list-img"
                />
              </div>
              <div>{data.child_name}</div>
              <div>{data.parent_name}</div>
              <div>{data.parent_mobile}</div>
              <div>{data.parent_email}</div>
              <div>
                <img
                  className="edit-icon"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRWHj5I3m_KJdm05iic2uYU2NtNdTssHZKQ&usqp=CAU"
                />
                <img
                  className="move-icon"
                  src="https://img.icons8.com/ios/500/forward-arrow.png"
                  onClick={()=>handlePageMove(data)}
                />
                <img
                  className="delete-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png"
                />
              </div>
            </div>
          );
        })}
      </div>
      {show &&<CustomModal
       title="Move Enquiry to Register" 
        studentData = {selectedStudent}
        handleModalClose= {handleModalClose}

        />}
    </div>
  );
};

export default Enquiry;
