import { useSession } from "next-auth/react";
import Heading from "../components/Heading";
import { getAllSubLinks } from "../actions/getAllSubLinks";

const Dashboard = async () => {
  // const { data: session } = useSession();
  // console.log(session?.user);

  const subLinks = await getAllSubLinks();

  return (
    <div className="flex flex-col w-full max-h-screen px-10 py-10">
      <Heading
        title="Welcome to Rely CMS 2"
        // subtitle={`Hello, ${session?.user?.name}`}
      />
    </div>
  );
};

export default Dashboard;
