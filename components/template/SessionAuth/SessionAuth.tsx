"use client"
import { useEffect } from "react"

function SessionAuth() {
  useEffect(() => {
    fetch("/api/auth", {
      method: "GET",
      credentials: "include",
    });
  }, []);

  return null;
}

export default SessionAuth