import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  auth,
  currentUser,
} from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const Navbar = async () => {
  const { userId } = await auth();

  return (
    <nav className="w-full flex items-center justify-center gap-1">
      <ul className="w-1/2 flex justify-between">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        {userId ? (
          <li>
            <UserButton />
          </li>
        ) : (
          <li>
            <Button>
              <SignInButton />
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
