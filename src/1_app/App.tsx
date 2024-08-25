import React from "react";
import SignIn from "../5_features/auth/components/sign-in/components/SignIn";
import RequireAuth from "../5_features/auth/RequireAuth";
import PersistLogin from "../5_features/auth/PersistLogin";
import { Routes, Route } from "react-router-dom";
import Home from "../3_pages/home";
import SignUpPage from "../3_pages/sign-up/components/SignUpPage";
import AppWrapper from "@/7_shared/layout/AppWrapper";
import AppLayout from "@/7_shared/layout/AppLayout";
import EntriesPage from "@/3_pages/entries/components/EnteriesPage";
import AccountPage from "@/3_pages/account/components/AccountPage";
import SettingsPage from "@/3_pages/settings/components/SettingsPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppWrapper />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/get-started" element={<SignUpPage />} />

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<AppLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="entries" element={<EntriesPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
