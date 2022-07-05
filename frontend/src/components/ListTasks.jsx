import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { List } from '@mui/material';

import Status from './Status';

export default function ListTasks(props) {
  const { task, deleteTask, editStatusTask } = props;

  return (
    <>
      <List sx={{ bgcolor: "background.paper", marginTop: "1em" }}>

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task.id)}>
             <Status editStatusTask={editStatusTask} />
              <DeleteForeverIcon />
            </IconButton>
          }
          disablePadding
        >

          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                disableRipple
              />

            </ListItemIcon>
            <ListItemText primary={task.text} />
          </ListItemButton>
          
              </ListItem>
              
      </List>
    </>
  );
}
