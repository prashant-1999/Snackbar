import { Stack, Alert, AlertTitle, Snackbar } from "@mui/material";
import { useState } from "react";
import "./App.css";
// import SnackBar from "./components/SnackBar";

function App() {
  // const alert = () => {
  //   console.log("alert");
  //   // return (
  //   //   <Alert variant="success">
  //   //     <AlertTitle>Successful</AlertTitle>
  //   //     Registration Successful !!!!
  //   //   </Alert>
  //   // );
  // };
  //  const navigate = useNavigate('');
  const [open, setOpen] = useState(false);
  const handleClose = (e, reason) => {
    if (reason == "clickaway") {
      return;
    }
    setOpen(false);
  };
  const message = "registration successfully!!!!";
  return (
    <>
      {/* <button onClick={<Alert/>}>Alert</button>
      <Stack spacing={2}>
        <Alert variant="filled" severity="error" onClose={()=>{alert("yo")}}>
          {/* <AlertTitle>Successful</AlertTitle> */}
      {/* Registration Successful !!!! */}
      {/* </Alert>
      </Stack> */}

      <button onClick={() => setOpen(true)}>Register</button>
      <Snackbar
        message={message}
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

export default App;
