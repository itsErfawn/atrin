"use client";
import { useRouter } from "next/navigation";

export function useUpdateQueryParams() {
  const router = useRouter();

  function updateQuery(newParams: Record<string, string>) {
    const current = new URLSearchParams(window.location.search);

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === "") {
        current.delete(key);
      } else {
        current.set(key, value);
      }
    });

    router.push(`?${current.toString()}`);
  }

  return updateQuery;
}
