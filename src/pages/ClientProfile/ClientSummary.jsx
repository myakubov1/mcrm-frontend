import { Container, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Contact from './Contact';
import Personal from './Personal';
import Appointments from './Appointments';
import apis from '../../services/api';

export default function ClientSummary() {
  const [client, setClient] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { _id } = useParams();

  useEffect(() => {
    axios.get(apis.clients.getClientProfile + _id)
      .then((response) => {
        setClient(response.data.client);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.message);
        console.log(e);
      });
  }, []);
  return (
    isLoading ? <CircularProgress /> : (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper sx={{ marginBottom: 2 }}><Contact name={`${client.firstName} ${client.lastName}`} contactInfo={client.contactInfo} /></Paper>
          <Paper sx={{ marginBottom: 2 }}><Personal personalInfo={client.personalInfo} /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ height: 200, marginBottom: 2 }}>Element 4</Paper>
          <Paper sx={{ height: 150, marginBottom: 2 }}>Element 5</Paper>
          <Paper sx={{ height: 100 }}>Element 6</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ marginBottom: 2 }}><Appointments /></Paper>
          <Paper sx={{ height: 100, marginBottom: 2 }}>Element 8</Paper>
          <Paper sx={{ height: 200 }}>Element 9</Paper>
        </Grid>
      </Grid>
    )

  );
}
