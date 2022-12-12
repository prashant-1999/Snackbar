import { Snackbar } from '@mui/material'
import React, { useState } from 'react'

function AlertBar(message,reason) {
    const [open,setOpen] = useState(false)
    const handleClose=  (e,reason)=>{
        if (reason == "clickaway") {
            return;
          }
          setOpen(false);
    }
  return (
    <>
        <Snackbar
        message={message}
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
      />
      

    </>
  )
}

export default AlertBar