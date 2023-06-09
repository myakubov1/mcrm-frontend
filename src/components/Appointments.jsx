// @mui
import {
  Card,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Popover,
  IconButton, Alert,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import apis from '../services/api';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(apis.appointment.getAppointments)
      .then((response) => {
        setAppointments(response.data.appointments);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.message);
        setIsLoading(false);
        console.log(e);
      });
  }, []);
  return (
    <Card sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isLoading ? <CircularProgress /> : (
        error ? <Alert severity="error">{error}</Alert> : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} sx={{ maxHeight: '350px', overflowX: 'auto' }}>
              <NewsItem appointments={appointments} />
            </Grid>
          </Grid>
        )
      )}
    </Card>
  );
}

function NewsItem({ appointments }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow key={appointment._id}>
              <TableCell>
                {appointment.client.firstName}
              </TableCell>
              <TableCell>{appointment.appointmentDate}</TableCell>
              <TableCell>{appointment.appointmentReason}</TableCell>
              <TableCell align="right">
                <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <Typography sx={{ background: 'red', boxShadow: 0, p: 2 }}>The content of the Popover.</Typography>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
