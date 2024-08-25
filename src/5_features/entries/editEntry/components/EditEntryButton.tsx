import React, { useState, useEffect } from "react";
import { Button } from "@/7_shared/ui/button";
import useAuth from "@/7_shared/hooks/useAuth";
import { EditEntryButtonProps } from "../types/types.edit-entry";
import { useLazyGetEntryByIdQuery } from "../api/editEntryApiSlice";

import { cn } from "@/1_app/lib/utils";
import { useMediaQuery } from "react-responsive";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/7_shared/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/7_shared/ui/drawer";
import { Input } from "@/7_shared/ui/input";

const EditEntryButton: React.FC<EditEntryButtonProps> = ({ entryId }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const { id: userId } = useAuth();
  const [getEntryById, { data, isLoading, error }] = useLazyGetEntryByIdQuery();
  const [amount, setAmount] = useState("");

  // Use useEffect to set amount only when data changes
  useEffect(() => {
    if (data) {
      setAmount(data.amount);
    }
  }, [data]);

  const onEditEntry = () => {
    getEntryById({ userId, entryId });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const renderDialog = () => (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={onEditEntry}>
          Edit Entry
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className={cn("grid items-start gap-4")}>
          <div className="grid gap-2">
            <Input
              type="email"
              id="email"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Input id="username" defaultValue="@shadcn" />
          </div>
          <Button type="submit">Save changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );

  const renderDrawer = () => (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" onClick={onEditEntry}>
          Edit Entry
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <form className={cn("grid items-start gap-4")}>
          <div className="grid gap-2">
            <Input
              type="email"
              id="email"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Input id="username" defaultValue="@shadcn" />
          </div>
          <Button type="submit">Save changes</Button>
        </form>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return isDesktop ? renderDialog() : renderDrawer();
};

export default EditEntryButton;
