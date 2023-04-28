import { Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const ListTodo = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState("");

  function deleteTodo(id) {
    const newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    const newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <ul
      className="list"
      style={{
        listStyle: "none",
        width: "100%",
        padding: "0",
        margin: "25px 0",
        gap:'18px',
        display:"flex",
        flexDirection:'column',
        alignItems:"center",
      }}
    >
      {todo.map((item) => {
        <li
          key={item.id}
          className="item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 15px",
            border: "1px solid lightgrey",
            borderRadius: "6px",
          }}
        >
            {edit == item.id ? (
              <>
                <TextField
                  sx={{ width: "370px", padding:"0"}}
                  id="outlined-basic"
                  placeholder="edit your task"
                  variant="outlined"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button
                  onClick={() => saveTodo(item.id)}
                  sx={{ padding: "15px" }}
                  variant="contained"
                >
                  Save
                </Button>
              </>
            ) : 
            <>
            <Typography variant="h6">{item.title}</Typography>
            <div>
              <IconButton  onClick={() => editTodo(item.id, item.title)}>
                <EditIcon />
              </IconButton>
              <IconButton>
                <DeleteIcon onClick={() => deleteTodo(item.id)}/>
              </IconButton>
            </div>
            </>
            }
          
        </li>;
      })}
    </ul>
  );
};
