import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

function WidgetSummary({
  title, total, color,
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
      <Typography variant="h3">{total}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
    </Card>
  );
}
export default WidgetSummary;
