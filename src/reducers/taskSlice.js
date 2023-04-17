import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    { id: '1', label: 'Create FireStone Logo', completed: false },
    { id: '2', label: 'Add SCSS and JS files if required', completed: false },
    { id: '3', label: 'Stakeholder Meeting', completed: false },
    { id: '4', label: 'Scoping & Estimations', completed: false },
    { id: '5', label: 'Sprint Showcase', completed: false },
    { id: '6', label: 'Add todos', completed: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    completeTask: (state, action) => {
      const { id, completed } = action.payload;
      const ctask = state.find((task) => task.id === id);
      if (ctask) {
        ctask.completed = completed;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, completeTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
