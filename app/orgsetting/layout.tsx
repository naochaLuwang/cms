"use client";

import Sidebar from "../components/Sidebar";
import { useSession } from "next-auth/react";

export default async function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full max-h-screen">
        <Sidebar orgName="Rely Edu CMS" />

        {children}
      </div>
    </>
  );
}
