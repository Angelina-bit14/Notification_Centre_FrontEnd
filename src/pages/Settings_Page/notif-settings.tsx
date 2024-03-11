import { Switch } from "@mui/material";
import React, { useState } from "react";
export const notifSettings = () => {
  const [open, setOpen] = useState(false);
  const [notifState, setNotifState] = useState(false);
  const [switchState, setSwitchState] = useState(true);
  return (
    <div>
      <p>
        This is a{" "}
        <span>
          <b>paragraph</b>
        </span>
      </p>
      <Switch
        defaultChecked
        onChange={() => {
          setSwitchState((prevSwitch) => !prevSwitch);
          setOpen(true);
        }}
      ></Switch>
    </div>
  );
};
