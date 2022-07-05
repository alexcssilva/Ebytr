import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import ListTasks from '../components/ListTasks';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task ]);
  };

  const deleteTask = (id) => {
    const remove = tasks.filter((task) => task.id !== id);
    setTasks(remove);
  };

  const editStatusTask = () => {
    setTasks(console.log('Oi'));
  }

  return (
    <div>
      <Container className="header-form">
        <Form addTask={addTask} />
        <List sx={{ marginTop: "1em" }}>
          {tasks.map((task) => 
            {return (
              <div key={task.id} className="list-tasks">
                <ListTasks 
                  task={task} 
                  deleteTask={deleteTask}
                  editStatusTask={editStatusTask}
                />
              </div>
            )}
          )}
        </List>
      </Container>
    </div>
  )
}
