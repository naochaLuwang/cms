"use client";
import { useSession } from "next-auth/react";
import Heading from "../components/Heading";
import Tiptap from "../components/TipTap";

const Dashboard = () => {
  const { data: session } = useSession();
  console.log(session?.user);

  return (
    <div className="flex flex-col w-full max-h-screen px-10 py-10">
      <Heading
        title="Welcome to Rely CMS 2"
        subtitle={`Hello, ${session?.user?.name}`}
      />
      <Tiptap />
    </div>
  );
};

export default Dashboard;
