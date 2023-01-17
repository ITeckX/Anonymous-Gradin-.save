import React from "react";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import { Stack, Button, TextField } from "@mui/material";
import auth from "../reducers/auth";
import * as actions from '../actions';

export default function Login() {
  // const [value,setValue]=useState({
  //   name:'',
  //   author:"",
  //   link: "",
  //   grade: 10
  // });
  const [updated,setUpdated]=useState({
      name:"",
      author:"",
      link: "",
      grade: 10

  });
  const [author, setAuthor]=useState('');
  const [name, setName]=useState('');
  const [link, setLink]=useState('');

  const handleChange=e=>{
    const value=e.target.value;
    switch(e.target.id){
      case 'author':
        setAuthor(e.target.value);
        break;
        case 'name':
          setName(e.target.value);
          break;
        case 'link':
           setLink(e.target.value);
           break;
        default: break;
    }

 
    
    
  }
  const handleClick=async e=>{
    // setUpdated({
      
    // });
    // console.log(author);
   // console.log(updated);
    actions.addProject({
      name:name,
      author: author,
      link: link,
      grade: 10});
    
  }


  return (
    <div style={{ marginLeft: "auto" }}>
      <Stack direction='row'>
        <TextField
          value={author}
          onChange={handleChange}
          id="author"
          label="Autor"
          fullWidth
          style={{
            //marginTop: "5rem",
            width: "15rem",
            marginLeft: "5.5rem",
          }}
          
          />
        <TextField
         value={name}
          onChange={handleChange}
          id="name"
          label="Nume proiect"
          fullWidth
          style={{
            //marginTop: "5rem",
            width: "15rem",
            marginLeft: "5.5rem",
          }}
          //inputRef={project}
          />
        <TextField
          value={link}
          onChange={handleChange}
          id="link"
          label="Link"
          fullWidth
          style={{
           // marginTop: "5rem",
            width: "15rem",
            marginLeft: "5.5rem",
          }}
          //inputRef={link}
          />
        <Button
        onClick={handleClick}
        variant="contained"
        style={{
          marginLeft: "7rem",
          height: "3rem",
          width: "15rem",
          //marginTop: "2rem",
        }}
      >
        Adauga
      </Button>
      </Stack>

      
    </div>
  );
}
