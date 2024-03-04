import React, { useState } from "react";
import {
  Button,
  DialogContent,
  DialogTitle,
  ListDivider,
  MenuItem,
} from "@mui/joy";
import { ListItemText } from "@mui/material";
import { notifType } from "../../static-data/Type/notifType";
import { Close } from "@mui/icons-material";

interface NotificationComponentProps {
  notify: notifType["notif"][];
}

export const NotificationComponent: React.FC<NotificationComponentProps> = ({
  notify,
}) => {
  const [notif, setNotif] = useState<notifType["notif"][]>(notify);
  // const changeState = (e: React.MouseEvent) => {
  //   const;
  return (
    <>
      {notif.map((notifItem) => (
        <MenuItem
          key={notifItem.id}
          color={!notifItem.isRead ? "primary" : "neutral"}
          onClick={(e) => {
            console.log("Notification clicked:", notifItem.id);
            notifItem.isRead = !notifItem.isRead;
          }}
        >
          <ListItemText
            primary={
              <DialogTitle>
                {" "}
                <b>{notifItem.title}</b>
              </DialogTitle>
            }
            secondary={<DialogContent>{notifItem.content}</DialogContent>}
          />
          <ListDivider />
          <Button>
            <Close />
          </Button>
        </MenuItem>
      ))}
    </>
  );
};
