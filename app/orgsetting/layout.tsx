"use client";

import Sidebar from "../components/Sidebar";

export default async function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full max-h-screen ">
        <Sidebar orgName="Rely Edu CMS" label={""} />

        {children}
      </div>
    </>
  );
}
