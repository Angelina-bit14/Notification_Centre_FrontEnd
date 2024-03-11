import React, { useEffect, useState } from "react";
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
  Switch,
} from "@mui/joy";
import { Notifications } from "@mui/icons-material";
import { notificationData } from "../../static-data/notification";
import { NotificationComponent } from "../listing_component/notification-template";
import { Slide, SnackbarContent } from "@mui/material";

// import { NotificationAlternate } from "./Notification-Comp";

export const NotiModal = () => {
  const animation = { animationName: Slide, animationDuration: 600 };
  const [length, setLength] = useState(0);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [notifState, setNotifState] = useState(false);
  // Assuming you want to update length based on notificationData changes
  // This useEffect is not necessary if notificationData doesn't change after initialization
  //
  const handleClose = (
    event?: React.SyntheticEvent<Element, Event> | null | Event,
    reason?: string
  ) => {
    if (reason === "clickaway" || reason === "escapeKeyDown") return;
    setIsToastOpen(false);
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
            <Container>
              <div>
                <b>Turn on all notifications</b>
              </div>
              <div>
                <Switch
                  defaultChecked
                  onChange={() => {
                    setIsToastOpen(true);
                  }}
                ></Switch>
              </div>{" "}
            </Container>{" "}
            <ListDivider />
            <NotificationComponent notify={notificationData} />
          </Menu>
        </Dropdown>
      </Box>
      {notifState
        ? noOfTimes !== 0 && (
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={isToastOpen}
              onClose={handleClose}
              autoHideDuration={5000}
              animationDuration={animation.animationDuration}
              sx={{
                ...(isToastOpen && {
                  animation: `${animation.animationName} ${animation.animationDuration}ms forwards`,
                }),
                ...(!isToastOpen && {
                  animation: `${animation.animationName} ${animation.animationDuration}ms forwards`,
                }),
              }}
            >
              <SnackbarContent message="Notifications are on" />
              <Button onClick={handleClose}>Okay</Button>
            </Snackbar>
          )
        : noOfTimes !== 0 && (
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              open={isToastOpen}
              onClose={handleClose}
              autoHideDuration={2000}
              animationDuration={animation.animationDuration}
              sx={{
                ...(isToastOpen && {
                  animation: `${animation.animationName} ${animation.animationDuration}ms forwards`,
                }),
                ...(!isToastOpen && {
                  animation: `${animation.animationName} ${animation.animationDuration}ms forwards`,
                }),
              }}
            >
              <SnackbarContent message="Notifications are off" />
              <Button onClick={handleClose}>Okay</Button>
            </Snackbar>
          )}
    </>
  );
};
