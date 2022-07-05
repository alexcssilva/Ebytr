import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Status from './Status';

export default function Form(props) {
  const [id, setId] = useState(0);
  const [text, setText] = useState('');

  const { addTask } = props;

  const onSave = (text) => {
    const obj = {id: id, text: text, };
    setId(id + 1);
    addTask(obj);
    document.getElementById("outlined-basic").value=null;
  }

  return (
      <div className="container-form">
        <div className="container-input-button">
          <TextField
            className="input-task"
            id="outlined-basic" 
            label="Task" 
            variant="outlined" 
            onChange={(e) => setText(e.target.value)} 
            fullWidth
          />
          <Status />
          <Button 
            variant="text"
            onClick={() => onSave(text)} >
            Task Create
          </Button>
        </div>
      </div>
  );
}
