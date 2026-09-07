import type { ReactNode } from "react";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return children;
}
