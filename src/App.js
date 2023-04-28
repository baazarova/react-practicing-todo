import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddTodo } from "./components/addTodo";
import { Header } from "./components/header";
import { ListTodo } from "./components/listTodo";



function App() {

  const getLocalStorage = ()=>{
    let item = JSON.parse(localStorage.getItem("todos"));
    if(item){
      return item
    }else{
      return []
    }
  }

  const [todo, setTodo] = useState(getLocalStorage())

  useEffect(()=>{
    localStorage.setItem("todos",  JSON.stringify(todo))
  }, [todo] )

  return (
    <Container sx={{width:"500px"}}>
      <Header/>
      <AddTodo todo={todo} setTodo={setTodo}/>
      <ListTodo todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
