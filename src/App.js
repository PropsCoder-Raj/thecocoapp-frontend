import React from "react";
import {  CssBaseline } from "@mui/material";
import AppRouter from "./AppRouter";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <div>
        <Toaster 
        position="bottom-right"
        reverseOrder={false} />
        <CssBaseline />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
