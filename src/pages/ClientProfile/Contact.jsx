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

export default function Contact({ contactInfo, name }) {
  return (
    <Card>
      <CardHeader
        title="Contact info"
      />
      <CardContent>
        <List>
          <ListItem disablePadding>
            <ListItemText primary="Full Name" />
            <ListItemText align="right" primary={name} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Cell Phone" />
            <ListItemText align="right" primary={contactInfo.cellPhone} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Home Phone" />
            <ListItemText align="right" primary={contactInfo.homePhone} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Address" />
            <ListItemText align="right" primary={contactInfo.address} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="Email" />
            <ListItemText align="right" primary={contactInfo.email} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
