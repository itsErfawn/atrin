"use client";

import { Button } from "@/components/Module/ui/button";
import { LogIn, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function BtmLogin() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem("cookie");
    setIsLogin(value === "true");
  }, []);

  return (
    <Button variant="ghost" size="icon">
      {isLogin ? (
        <User className="h-8 w-8" />
      ) : (
        <Link href={"/register"}>
          <LogIn className="h-8 w-8" />
        </Link>
      )}
    </Button>
  );
}

export default BtmLogin;
