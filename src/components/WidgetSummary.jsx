import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

function WidgetSummary({
  title, total, color, icon,
}) {
  return (
    <Card
      sx={{
        py: 3,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
      }}
    >
      {/* <StyledIcon */}
      {/*  sx={{ */}
      {/*    color: (theme) => theme.palette[color].dark, */}
      {/*    backgroundImage: (theme) => `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha( */}
      {/*      theme.palette[color].dark, */}
      {/*      0.24, */}
      {/*    )} 100%)`, */}
      {/*  }} */}
      {/* > */}
      {/*  <MenuIcon color="secondary" /> */}
      {/* </StyledIcon> */}

      <Typography variant="h3">{total}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export default WidgetSummary;
