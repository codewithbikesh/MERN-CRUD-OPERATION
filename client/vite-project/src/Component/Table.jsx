import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Table({UpdateUser}) {
  // Assuming data is available
  // const data = {
  //   users: [
  //     {
  //       name: "Bikesh Kumar Gupta",
  //       father: "Prem Lal Sah",
  //       email: "example@gmail.com",
  //       phone: "9800201425"
  //     }
  //     // Add more user objects if needed
  //   ]
  // };
  const [data, setData] = useState([])
 useEffect(() => {
  async function FeatchData(){
    try {
      const feacthUser = await axios.get(`http://localhost:4000/api/get`)
    const response = feacthUser.data
    console.log(response);
    setData(response);
    } catch (error) {
      
    }
  }
  FeatchData()
 },[data])

//  const UpdateUser = (id)=>{
//   alert(id);
//  }
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>Manage <b>Employees</b></h2>
              </div>
              <div className="col-sm-6">
                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal">
                  <i className="material-icons">&#xE147;</i> <span>Add New Employee</span>
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Father</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.user?.map((users, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{users.name}</td>
                  <td>{users.fathername}</td>
                  <td>{users.email}</td>
                  <td>{users.phone}</td>
                  <td>
                    <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onClick={() => UpdateUser(users._id)}>
                      <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                    </a>
                    <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteEmployeeModal">
                      <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
