import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "./app/hooks";
import { open } from "./features/common/snackbarSlice";
import { Counter } from "./features/counter/Counter";
import Floor from "./Floor";
import logo from "./logo.svg";

function App() {
  const [snackbarText, setSnackbarText] = useState("");
  const dispatch = useAppDispatch();

  return (
    <Floor>
      <header className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Box sx={{marginTop:"30px", display:"flex", width:"400px", justifyContent: "space-between"}}>
          <TextField label="Snackbar text" value={snackbarText} onChange={event => setSnackbarText(event.target.value)}/>
          <Button variant="outlined" onClick={() => dispatch(open({message:snackbarText}))}>Test snackbar</Button>
         </Box>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </Floor>
  );
}

export default App;
