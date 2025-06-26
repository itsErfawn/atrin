"use client"
import { useEffect } from "react"

function GeustAuth() {
  useEffect(() => {
    fetch("/api/geust", {
      method: "GET",
      credentials: "include",
    });
  }, []);

  return null;
}

export default GeustAuth