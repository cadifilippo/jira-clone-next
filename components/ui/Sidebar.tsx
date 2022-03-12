import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useContext } from 'react';
import { UIContext } from '../../context/ui/UIContext';

const menuItems: string[] = ['Inbox', 'Starred', 'Sent Mail', 'Drafts'];

export const Sidebar = () => {
  const { sidemenuOpen } = useContext(UIContext);
  return (
    <Drawer
      anchor="left"
      open={sidemenuOpen}
      onClose={() => {
        console.log('close');
      }}
    >
      <Box sx={{ padding: '5px 10px' }}>
        <Typography variant="h4" color="primary">
          Menú
        </Typography>
      </Box>
      <Box sx={{ width: 250 }}>
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
