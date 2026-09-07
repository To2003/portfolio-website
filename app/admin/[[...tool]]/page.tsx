"use client";

import dynamicImport from "next/dynamic";

const StudioClient = dynamicImport(() => import("./StudioClient"), {
  ssr: false,
});

export default function AdminPage() {
  return <StudioClient />;
}
