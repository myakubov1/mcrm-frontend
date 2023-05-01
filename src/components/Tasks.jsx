// Ready
// react
import { useState } from 'react';
// @mui-icons
import MenuIcon from '@mui/icons-material/Menu';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
// @mui
import {
  Card,
  Stack,
  Divider,
  Popover,
  Checkbox,
  MenuItem,
  IconButton,
  FormControlLabel,
} from '@mui/material';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { addTask, completeTask, deleteTask } from '../reducers/taskSlice';

// ----------------------------------------------------------------------

export default function Tasks() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <Card>
      {tasks?.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </Card>
  );
}

// ----------------------------------------------------------------------

function TaskItem({ task }) {
  const [open, setOpen] = useState(null);

  const dispatch = useDispatch();

  // Методы контекстного меню
  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setOpen(null);
  };

  // Методы кнопок контекстного меню

  const handleMarkComplete = (id, completed) => {
    handleCloseMenu();
    dispatch(completeTask({ id, completed }));
    console.log('MARK COMPLETE', task.id);
  };

  const handleDelete = (id) => {
    handleCloseMenu();
    dispatch(deleteTask({ id }));
    console.log('DELETE', task.id);
  };

  return (
    <Stack
      direction="row"
      sx={{
        px: 2,
        py: 0.75,
        ...(task.completed && {
          color: 'text.disabled',
          textDecoration: 'line-through',
        }),
      }}
    >
      <FormControlLabel
        control={<Checkbox checked={task.completed} onChange={() => handleMarkComplete(task.id, !task.completed)} />}
        label={task.label}
        sx={{ flexGrow: 1, m: 0 }}
      />

      <IconButton size="large" color="inherit" sx={{ opacity: 0.48 }} onClick={handleOpenMenu}>
        <MenuIcon />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={() => handleMarkComplete(task.id, !task.completed)}>
          <DoneIcon />
          Mark Complete
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={() => handleDelete(task.id)} sx={{ color: 'error.main' }}>
          <DeleteIcon />
          Delete
        </MenuItem>
      </Popover>
    </Stack>
  );
}
