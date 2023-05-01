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
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import apis from '../services/api';

export default function ClientsTable() {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(apis.clients.getClients)
      .then((response) => {
        setClients(response.data);
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
              <NewsItem clients={clients} />
            </Grid>
          </Grid>
        )
      )}
    </Card>
  );
}

function NewsItem({ clients }) {
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
            <TableCell>Passport</TableCell>
            <TableCell>PatientID</TableCell>
            <TableCell>CellPhone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>CID</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client._id}>
              <TableCell>{`${client.firstName} ${client.lastName}`}</TableCell>
              <TableCell>{client.passport}</TableCell>
              <TableCell>{client.personalInfo.patientID}</TableCell>
              <TableCell>{client.contactInfo.cellPhone}</TableCell>
              <TableCell>{client.contactInfo.email}</TableCell>
              <TableCell><Link to={`/clients/${client._id}`}>{client._id}</Link></TableCell>
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
                  <Button sx={{ boxShadow: 0, p: 2 }}><Link to={`/clients/${client._id}`}>{client._id}</Link></Button>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
