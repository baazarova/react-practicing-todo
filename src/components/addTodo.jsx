import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = React.useState("");

  const addTask = () => {
    setTodo([
      ...todo,
      {
        id: new Date().getTime(),
        title: value,
      },
     
    ]);
    setValue('')
  };


  return (
    <Box
      component="form"
      sx={{
        m: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        mt: "35px",
      }}
    >
      <TextField
        sx={{ width: "310px", margin: "0" }}
        id="outlined-basic"
        placeholder="Type your task"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={addTask} variant="contained" sx={{ bgcolor: "plum", padding: "12px" }}>
        Add task
      </Button>
    </Box>
  );
};
