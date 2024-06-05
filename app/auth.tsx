"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginBtn from "@/components/ui/login-btn";

const GuestbookAuth = () => {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    await console.log(session?.user?.name, message);
    setMessage("");
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      {session && (
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Your Message"
            className="bg-card rounded"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button
            className="rounded"
            size="sm"
            type="submit"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      )}
      <LoginBtn />
    </div>
  );
};

export default GuestbookAuth;
