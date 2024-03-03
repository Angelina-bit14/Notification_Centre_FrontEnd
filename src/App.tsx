import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NotificationProvider } from "./components/context/notifContext";
import { NotiModal } from "./components/display_component/Notification Container";

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <NotiModal /> {/*--> The notification model*/}
      </NotificationProvider>
    </div>
  );
}

export default App;
