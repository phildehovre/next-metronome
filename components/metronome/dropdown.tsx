import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type MetroDropdownTypes = {
  options?: {
    label: string;
    value: string;
  }[];
};

const MetroDropdown = ({ options }: MetroDropdownTypes) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose a sound</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options?.map((option) => (
          <DropdownMenuItem key={option.value}>{option.label}</DropdownMenuItem>
        ))}

        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MetroDropdown;
