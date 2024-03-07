import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsPage } from "../components/display_component/Notification-Settings";
import { NotiModal } from "../components/display_component/Notification Container";
export const NotifRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotiModal />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
