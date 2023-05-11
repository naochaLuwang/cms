import { useSession } from "next-auth/react";
import Heading from "../components/Heading";
<<<<<<< HEAD
// import Tiptap from "../components/TipTap";
=======
import { getAllSubLinks } from "../actions/getAllSubLinks";
>>>>>>> 3c9d3e0432a99e9c6af9fd1207e4e2ddcd90ab2a

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
<<<<<<< HEAD
      {/* <Tiptap /> */}
=======
>>>>>>> 3c9d3e0432a99e9c6af9fd1207e4e2ddcd90ab2a
    </div>
  );
};

export default Dashboard;
