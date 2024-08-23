import React from "react";
import SignIn from "../5_features/auth/components/sign-in/components/SignIn";
import RequireAuth from "../5_features/auth/RequireAuth";
import PersistLogin from "../5_features/auth/PersistLogin";
import { Routes, Route } from "react-router-dom";
import Home from "../3_pages/home";
import SignUpPage from "../3_pages/sign-up/components/SignUpPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/get-started" element={<SignUpPage />} />

      {/* <Route element={<PersistLogin />}>
        <Route element={<RequireAuth />}> */}
          <Route path="home" element={<Home />} />
          <Route path="entries" element={<Home />} />
          <Route path="account" element={<Home />} />
          <Route path="settings" element={<Home />} />
        {/* </Route>
      </Route> */}
    </Routes>
  );
};

export default App;
