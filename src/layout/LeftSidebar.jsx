import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useLocation, NavLink as RouterLink } from 'react-router-dom';
import {
  Typography, Link, styled, alpha, Avatar, List, ListItemButton, ListItemText, ListItemIcon,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import useResponsive from '../hooks/useResponsive';
import Logo from '../components/Logo';
// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// eslint-disable-next-line max-len
const StyledNavItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: <DashboardIcon />,
  },
  {
    title: 'user',
    path: '/clients',
    icon: <GroupIcon />,
  },
  {
    title: 'testpage',
    path: '/testpage',
    icon: <GroupIcon />,
  },
];

function NavItem({ item }) {
  const {
    title, path, icon, info,
  } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
// ----------------------------------------------------------------------

export default function LeftSidebar({ openNav, onCloseNav }) {
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderContent = (
    <Box>
      <Box sx={{
        px: 2.5,
        pt: 1.5,
        pb: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
      >
        <Logo />
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none">
          <StyledAccount>
            <Avatar alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                Max
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Admin
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <List disablePadding sx={{ p: 1 }}>
          {navConfig.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
