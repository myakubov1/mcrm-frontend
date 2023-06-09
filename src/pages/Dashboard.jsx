// react
import { useState } from 'react';
// mui
import { Typography, Container, Grid } from '@mui/material';
import PatientsTable from '../components/ClientsTable';
import Appointments from '../components/Appointments';
import Tasks from '../components/Tasks';
import WidgetSummary from '../components/WidgetSummary';

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <WidgetSummary title="Weekly Sales" total={714000} color="primary" icon="ant-design:android-filled" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <WidgetSummary title="New Users" total={1352831} color="info" icon="ant-design:apple-filled" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <WidgetSummary title="Item Orders" total={1723315} color="warning" icon="ant-design:windows-filled" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <WidgetSummary title="Bug Reports" total={234} color="error" icon="ant-design:bug-filled" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Appointments />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <PatientsTable />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Tasks />
      </Grid>
    </Grid>
  );
}
