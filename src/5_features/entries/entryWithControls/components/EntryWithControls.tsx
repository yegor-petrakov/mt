import React from "react";
import Entry from "@/6_entities/entry/components/Entry";
import EditEntryButton from "../../editEntry/components/EditEntryButton";
// import ViewEntryButton from "../../viewEntry/components/ViewEntryButton";
import { EntryProps } from "@/6_entities/entry/types/types.entry"; // Adjust the import path as necessary

interface EntryWithControlsProps extends EntryProps {
  // You can add any additional props specific to EntryWithControls here if needed
}

const EntryWithControls: React.FC<EntryWithControlsProps> = ({
  id, // Include id
  userId, // Include userId
  amount,
  categoryId,
  currencyAbbr,
  dateTime,
  note,
}) => {
  return (
    <div className="border rounded-lg shadow-md p-4 space-y-2">
      <Entry
        id={id} // Pass id to Entry
        userId={userId} // Pass userId to Entry
        amount={amount}
        categoryId={categoryId}
        currencyAbbr={currencyAbbr}
        dateTime={dateTime}
        note={note}
      />
      <div className="flex space-x-2">
        <EditEntryButton entryId={id} />
        {/* <ViewEntryButton /> */}
      </div>
    </div>
  );
};

export default EntryWithControls;
