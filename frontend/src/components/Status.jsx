import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Status() {
  const [statusTask, setStatusTask] = useState('');

  const handleStatus = (event) => {
    setStatusTask(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={statusTask}
          label="StatusTasks"
          onChange={handleStatus}
        >
          <MenuItem value={"Pending"}>Pending</MenuItem>
          <MenuItem value={"Progress"}>Progress</MenuItem>
          <MenuItem value={"Complete"}>Complete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
