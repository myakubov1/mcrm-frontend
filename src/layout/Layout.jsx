// react
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// mui
import { styled } from '@mui/material/styles';
// layout
import Box from '@mui/material/Box';
import Header from './Header';
import LeftSidebar from './LeftSidebar';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

// ----------------------------------------------------------------------

export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />
      <LeftSidebar openNav={open} onCloseNav={() => setOpen(false)} />
      <Box sx={{ width: '100%', paddingTop: 10, paddingX: 2 }}>
        <Outlet />
      </Box>
    </StyledRoot>
  );
}
