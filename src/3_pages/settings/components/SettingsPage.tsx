import React from "react";
import PageWrapper from "@/7_shared/layout/PageLayout";
import Logout from "@/5_features/auth/components/logout/components/Logout";

const SettingsPage: React.FC = () => {
  return (
    <PageWrapper>
      <div>SettingsPage</div>
      <Logout />
    </PageWrapper>
  );
};

export default SettingsPage;
