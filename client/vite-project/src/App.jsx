import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Corrected import path for Bootstrap JS
import './App.css';
import UserTable from './Table/UserTable';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <>
      <UserTable />
      <Toaster></Toaster>
    </>
  );
}