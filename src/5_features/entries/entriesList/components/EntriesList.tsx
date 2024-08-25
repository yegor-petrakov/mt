import React from "react";
import { useGetEntriesByUserIdQuery } from "../api/entriesListApiSlice";
import useAuth from "@/7_shared/hooks/useAuth";
import { EntryData } from "../types/types.entries-list";
import EntryWithControls from "../../entryWithControls";

const EntriesList: React.FC = () => {
  const { id } = useAuth();
  const {
    data: entries,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetEntriesByUserIdQuery({ id });

  if (isLoading) {
    return <div className="text-center p-4">Loading entries...</div>;
  }

  if (isError) {
    console.log(error);
    return <div className="text-red-500 text-center p-4">Error</div>;
  }

  if (isSuccess) {
    return (
      <div className="space-y-4">
        {isSuccess && entries && entries.length > 0 ? (
          entries.map((entry: EntryData) => (
            <EntryWithControls key={entry.id} {...entry} />
          ))
        ) : (
          <p className="text-gray-500 text-center">No entries found.</p>
        )}
      </div>
    );
  }
};

export default EntriesList;
