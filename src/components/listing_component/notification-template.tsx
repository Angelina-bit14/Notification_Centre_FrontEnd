import React, { useState } from "react";
import {
  Button,
  Container,
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
  const [isCloseButtonVisible, setIsCloseButtonVisible] = useState(false);

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
          <Container>
            <ListItemText
              primary={
                <DialogTitle>
                  {" "}
                  <b>{notifItem.title}</b>
                </DialogTitle>
              }
              secondary={<DialogContent>{notifItem.content}</DialogContent>}
            />
          </Container>

          <Container
            onMouseEnter={() => setIsCloseButtonVisible(true)}
            onMouseLeave={() => setIsCloseButtonVisible(false)}
          >
            {isCloseButtonVisible && (
              <Button
                variant="plain"
                color={notifItem.isRead ? "neutral" : "primary"}
              >
                <Close />
              </Button>
            )}
          </Container>
          <ListDivider />
        </MenuItem>
      ))}
    </>
  );
};
