import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotesIcon from '@mui/icons-material/Notes';
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Snackbar, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './App.css';
import Drawer_ from './Drawer_';
import { getSnackbarState } from "./features/common/snackbarSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { close, open } from "./features/common/snackbarSlice";

function Floor(props: { children: JSX.Element }) {

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const snackbarState = useAppSelector(getSnackbarState);
  const dispatch = useAppDispatch();

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setDrawerOpen(false)}
      onKeyDown={() => setDrawerOpen(false)}
    >
      <List>
        {[
          ['Top', <ArrowForwardIcon />, () => { navigate("/index") }],
          ['Readme', <NotesIcon />, () => { navigate("/readme") }],
          ['(Inbox)', <InboxIcon />, () => { dispatch(open({ message: "まだ実装してないよ" })) }],
          ['(Starred)', <MailIcon />, () => { dispatch(open({ message: "まだ実装してないよ" })) }],
          ['(Send email)', <InboxIcon />, () => { dispatch(open({ message: "まだ実装してないよ" })) }],
          ['(Drafts)', <MailIcon />, () => { dispatch(open({ message: "まだ実装してないよ" })) }]
        ].map((pair, index) => (
          <ListItem key={pair[0] as string} disablePadding>
            <ListItemButton onClick={(pair[2] as () => void)}>
              <ListItemIcon>
                {pair[1] as JSX.Element}
              </ListItemIcon>
              <ListItemText primary={pair[0] as string} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box>
      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={e => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ←メニュー
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "80px" }}>
        {props.children}
      </Box>
      <Drawer_ />
      <Snackbar {...snackbarState} onClose={() => dispatch(close())}/>
    </Box>
  );
}

export default Floor;
