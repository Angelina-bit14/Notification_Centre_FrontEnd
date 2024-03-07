import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Dropdown,
  ListDivider,
  Menu,
  MenuButton,
  Snackbar,
  SnackbarOrigin,
  Switch,
} from "@mui/joy";
import { Notifications, Settings } from "@mui/icons-material";
import { notificationData } from "../../static-data/notification";
import { NotificationComponent } from "../listing_component/notification-template";
import { SettingsPage } from "./Notification-Settings";
import { useNavigate } from "react-router-dom";
import { Slide, SnackbarContent } from "@mui/material";

// import { NotificationAlternate } from "./Notification-Comp";

export const NotiModal = () => {
  const [length, setLength] = useState(0);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [notifState, setNotifState] = useState({
    on: false,
    noOfTimes: 0,
  });
  // Assuming you want to update length based on notificationData changes
  // This useEffect is not necessary if notificationData doesn't change after initialization
  //
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway" || reason === "escape") {
      return;
    }
  };

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
            <Container>
              <div>
                <b>Turn on all notifications</b>
              </div>
              <div>
                <Switch
                  defaultChecked
                  onChange={() => {
                    setIsToastOpen(true);
                    setNotifState(()=>{...prevState,noOfItems: prevState.noOfItems + 1})
                  }}
                ></Switch>
              </div>{" "}
            </Container>{" "}
            <ListDivider />
            <NotificationComponent notify={notificationData} />
          </Menu>
        </Dropdown>
      </Box>
      {notifState.noOfTimes !== 0 &&
        (notifState.on ? (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={isToastOpen}
            onClose={handleClose}
            autoHideDuration={5000}
            transitionDuration={{ enter: 1000 }}
            TransitionComponent={Slide}
          >
            <SnackbarContent message="This is weird" />
            <Button onClick={handleClose}></Button>
          </Snackbar>
        ) : (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={isToastOpen}
            onClose={handleClose}
            autoHideDuration={5000}
            transitionDuration={{ enter: 1000 }}
            TransitionComponent={Slide}
          >
            <SnackbarContent message="What in the world" />
          </Snackbar>
        ))}
    </>
  );
};
