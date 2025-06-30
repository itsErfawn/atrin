"use client";

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
    <button>
      {isLogin ? (
        <User className="h-8 w-8" />
      ) : (
        <Link href={"/register"}>
          <LogIn className="h-8 w-8" />
        </Link>
      )}
    </button>
  );
}

export default BtmLogin;
