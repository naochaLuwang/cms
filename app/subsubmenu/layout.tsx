import Sidebar from "../components/Sidebar";

export default async function SubMenuLayout({
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
