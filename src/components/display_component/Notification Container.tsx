import React, { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Dropdown,
  ListDivider,
  Menu,
  MenuButton,
  Switch,
} from "@mui/joy";
import { Notifications } from "@mui/icons-material";

import { notificationData } from "../../static-data/notification";
import { NotificationComponent } from "../listing_component/notification-template";
import {
  Container,
  Grid,
  Slide,
  Snackbar,
  SnackbarContent,
} from "@mui/material";

export const NotiModal = () => {
  const [length, setLength] = useState(0);
  const [open, setOpen] = useState(false);
  const [notifState, setNotifState] = useState(false);
  const [switchState, setSwitchState] = useState(true);

  const handleClose = (
    event?: React.SyntheticEvent<Element, Event> | null | Event,
    reason?: string
  ) => {
    if (reason === "clickaway" || reason === "escapeKeyDown") return;
    setOpen(false);
    noOfTimes = noOfTimes + 1;
  };
  let noOfTimes = 0;
  useEffect(() => {
    let unreadCount = 0;

    const unreadNotifications = notificationData.filter(
      (notif) => !notif.isRead
    );
    unreadCount = unreadNotifications.length;
    console.log(unreadNotifications);

    console.log("Unread notifications count:", unreadCount);
    // console.log(typeof len);
    // setLength(5);
    setLength(unreadCount);
    setNotifState(true);
  }, [notificationData]);

  console.log(notificationData);

  return (
    <>
      <Box>
        <Dropdown>
          <MenuButton variant="plain">
            <Badge badgeContent={length} max={1000} badgeInset="0 -12 0 0">
              {/* <Badge badgeContent={length} max={1000}> */}
              <Notifications />
            </Badge>
          </MenuButton>
          <Menu>
            <Grid spacing={2}>
              <Container>
                <h1>Notifications</h1>
              </Container>{" "}
              <ListDivider />
              <NotificationComponent notify={notificationData} />
            </Grid>
          </Menu>
        </Dropdown>
      </Box>
      {switchState ? (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          onClose={handleClose}
          autoHideDuration={2000}
          transitionDuration={{ enter: 500 }}
          TransitionComponent={Slide}
          sx={{ display: () => (switchState && open ? "block" : "none") }}
        >
          <SnackbarContent message="Notifications turned on" />
        </Snackbar>
      ) : (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          onClose={handleClose}
          autoHideDuration={2000}
          transitionDuration={{ enter: 500 }}
          TransitionComponent={Slide}
          sx={{ display: () => (!switchState && open ? "block" : "none") }}
        >
          <SnackbarContent message="Notifications turned off" />
        </Snackbar>
      )}
    </>
  );
};
