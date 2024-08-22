// @ts-nocheck

import React, { useState } from "react";
import { useGetEntriesByUserIdQuery } from "../api/entriesApiSlice";

const EntriesList: React.FC = () => {
  const [fetchData, setFetchData] = useState(false);

  const { data, error, isLoading, refetch } = useGetEntriesByUserIdQuery(
    "21544a31-68c8-4abf-9476-12fe3d70c03f",
    {
      skip: !fetchData, // Skip the query if fetchData is false
    }
  );

  const handleFetchData = () => {
    setFetchData(true);
  };

  const handleRefetchData = () => {
    refetch();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Entries List</h1>
      {!fetchData && <button onClick={handleFetchData}>Load Entries</button>}
      {fetchData && (
        <button onClick={handleRefetchData}>Refetch Entries</button>
      )}
      {data &&
        data.map((entry) => (
          <div key={entry.id}>
            {entry.amount}
            {entry.currencyAbbr} | {entry.dateTime}
          </div>
        ))}
    </div>
  );
};

export default EntriesList;
