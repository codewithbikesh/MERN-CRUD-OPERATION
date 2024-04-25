import React, { useState } from 'react';
import Table from '../Component/Table'
import AddUser from '../Component/AddUser'
import UpdatedUser from '../Component/UpdatedUser'
import DeletUser from '../Component/DeletUser'
import axios from 'axios'

export default function UserTable() {
  
  const [value, setValue] = useState({
    name: '',
    fathername: '',
    email: '',
    phone: ''
})
const [updateid, setUpdateid] = useState()

const handleChange = (e) => {
  setValue({
      ...value,
      [e.target.name]:e.target.value
  })
}


const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(value);
  try {
      const updateUser =  await axios.put(`http://localhost:4000/api/update${updateid}`, value)
      const response = updateUser.data
      console.log(response)
  } catch (error) {
      console.log(error)
  }
}
  const UpdateUser = (id) => {
    setUpdateid(id);
  }
  return (
    <div>
      <Table UpdateUser={UpdateUser}></Table>
      <AddUser></AddUser>
      <UpdatedUser value={value}  handleChange={handleChange} handleSubmit={handleSubmit}></UpdatedUser>
      <DeletUser></DeletUser>
    </div>
  )
}
