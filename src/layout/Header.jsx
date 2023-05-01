import {
  Box, Stack, AppBar, Toolbar, IconButton, Badge, SvgIcon, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const isLgScreen = useMediaQuery('(min-width:1200px)');

  return (
    <AppBar sx={{ width: isLgScreen ? 'calc(100% - 280px)' : '100%' }}>
      <Toolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            display: { lg: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <div>Searchbar</div>
        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Box>
            <Button><Typography color="red">Lang</Typography></Button>
          </Box>
          <div>NotificationsPopover</div>
          <div>AccountPopover</div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
