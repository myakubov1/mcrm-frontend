import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import {
  List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';

export default function Personal({ personalInfo }) {
  return (
    <Card>
      <CardHeader
        title="Personal info"
      />
      <CardContent>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Gender" />
            <ListItemText align="right" primary={personalInfo.gender} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Birth (Age)" />
            <ListItemText align="right" primary={personalInfo.birth} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Patient ID" />
            <ListItemText align="right" primary={personalInfo.patientID} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Nationality" />
            <ListItemText align="right" primary={personalInfo.nationality} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Marital Status" />
            <ListItemText align="right" primary={personalInfo.maritalStatus} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Emergency Contact" />
            <ListItemText align="right" primary={personalInfo.emergencyContact} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Language" />
            <ListItemText align="right" primary={personalInfo.language} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
