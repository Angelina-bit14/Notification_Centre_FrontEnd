import React, { useEffect, useState } from "react";
import { Badge, Box, Container, Dropdown, Menu, MenuButton } from "@mui/joy";
import { Notifications } from "@mui/icons-material";

import { notificationData } from "../../static-data/notification";
import { NotificationComponent } from "../listing_component/notification-template";
import { Grid } from "@mui/material";

// import { NotificationAlternate } from "./Notification-Comp";

export const NotiModal = () => {
  const [length, setLength] = useState(0);

  // Assuming you want to update length based on notificationData changes
  // This useEffect is not necessary if notificationData doesn't change after initialization
  //
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
    <Box>
      <Dropdown>
        <MenuButton variant="plain">
          <Badge badgeContent={length} max={100} badgeInset="0 -12 0 0">
            {/* <Badge badgeContent={length} max={1000}> */}
            <Notifications />
          </Badge>
        </MenuButton>
        <Menu sx={{ minHeight: "60vh", minWidth: "30vh", overflow: "auto" }}>
          <Grid container spacing={2}>
            <Grid xs={2} sm={4} md={4} lg={4}>
              <Container>
                <h2>Notifications</h2>
              </Container>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={2} sm={4} md={4} lg={4}>
              <NotificationComponent notify={notificationData} />
            </Grid>
          </Grid>
        </Menu>
      </Dropdown>
    </Box>
  );
};
