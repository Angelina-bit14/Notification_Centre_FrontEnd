import React, { useEffect, useState } from "react";
import { Badge, Box, Dropdown, Menu, MenuButton } from "@mui/joy";
import { Notifications } from "@mui/icons-material";

import { notificationData } from "../../static-data/notification";
import { NotificationComponent } from "../listing_component/notification-template";

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
          <Badge badgeContent={length} max={1000} badgeInset="0 -12 0 0">
            {/* <Badge badgeContent={length} max={1000}> */}
            <Notifications />
          </Badge>
        </MenuButton>
        <Menu>
          <NotificationComponent notify={notificationData} />
          {/* <NotificationAlternate notify={notificationData} /> */}
          {/* <MenuItem>
            <b>Chocolate</b>
          </MenuItem>
          <MenuItem>
            <b>Bubble Gum</b>
          </MenuItem>
          <MenuItem>
            <b>Youtube</b>
          </MenuItem>
          <MenuItem>
            <b>Router</b>
          </MenuItem> */}
        </Menu>
      </Dropdown>
    </Box>
  );
};
