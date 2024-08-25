import React from "react";
import PageWrapper from "@/7_shared/layout/PageLayout";
import EntriesList from "@/5_features/entries/entriesList";
import AddEntryButton from "@/5_features/entries/addEntry";

const EntriesPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex items-center justify-between w-full">
        <h2>EntriesPage</h2>
        <AddEntryButton />
      </div>
      <EntriesList />
    </PageWrapper>
  );
};

export default EntriesPage;
