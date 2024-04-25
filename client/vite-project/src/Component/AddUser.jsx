import React, { useState } from 'react';
import axios from 'axios';

export default function AddUser() {
    const [value, setValue] = useState({
        name: "",
        fathername: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const adduser = await axios.post(`http://localhost:4000/api/create`, value);
            const response = adduser.data;
            console.log(response);
            if(response.success) {
                toast.success(response.message);
           
            // Clear the form fields after successful submission
            setValue({
                name: "",
                fathername: "",
                email: "",
                phone: ""
            });
        }else{
            toast.error(response.message);
        }
        } catch (error) {
            console.error('Error adding user:', error);
            // Handle error here, show error message or perform appropriate action
        }
        console.log(value);
    };

    return (
        <>
            <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Employee</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" value={value.name} name='name' onChange={handleChange} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Father Name</label>
                                    <input type="text" value={value.fathername} onChange={handleChange} name='fathername' className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" value={value.email} onChange={handleChange} name='email' className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" value={value.phone} onChange={handleChange} name='phone' className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
