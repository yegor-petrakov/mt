import React from "react";
import { EntryProps } from "../types/types.entry";

const Entry: React.FC<EntryProps> = ({
  amount,
  categoryId,
  currencyAbbr,
  dateTime,
  note,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <p className="text-lg font-medium">
        Amount:{" "}
        <span className="font-bold">
          {amount} {currencyAbbr}
        </span>
      </p>
      <p className="text-gray-500">Category ID: {categoryId}</p>
      <p className="text-gray-500">Date: {dateTime}</p>
      <p className="text-gray-500 truncate">{note}</p>
    </div>
  );
};

export default Entry;
