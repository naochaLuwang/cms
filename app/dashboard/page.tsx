import Heading from "../components/Heading";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import client from "../libs/prismadb";
import { Links, Message, People, Programme, User } from "@prisma/client";
import MessageTable from "../components/Table/MessageTable";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  const messages: Message[] = await client.message.findMany({});
  const users: User[] = await client.user.findMany({});
  const links: Links[] = await client.links.findMany({
    where: {
      status: "ACTIVE",
    },
  });
  const faculties: People[] = await client.people.findMany({});
  const programmes: Programme[] = await client.programme.findMany({});

  return (
    <div className="flex flex-col w-full max-h-screen px-10 py-10">
      <Heading
        title="Welcome to Pratiksha Institute of Allied Health Science CMS"
        subtitle={`Hello ${session?.user.name}`}
      />

      <div className="grid w-full grid-cols-4 gap-6 mt-10">
        <div className="flex flex-col w-full h-auto px-6 py-6 space-y-2 bg-white border-2 rounded-md shadow-md">
          <h1 className="text-5xl font-bold text-neutral-700">
            {users.length}
          </h1>
          <p className="text-xl font-medium">Users</p>
        </div>
        <div className="flex flex-col w-full h-auto px-6 py-6 space-y-2 bg-white border-2 rounded-md shadow-md">
          <h1 className="text-5xl font-bold text-neutral-700">
            {links.length}
          </h1>
          <p className="text-xl font-medium">Links</p>
        </div>
        <div className="flex flex-col w-full h-auto px-6 py-6 space-y-2 bg-white border-2 rounded-md shadow-md">
          <h1 className="text-5xl font-bold text-neutral-700">
            {faculties.length}
          </h1>
          <p className="text-xl font-medium">Faculties</p>
        </div>
        <div className="flex flex-col w-full h-auto px-6 py-6 space-y-2 bg-white border-2 rounded-md shadow-md">
          <h1 className="text-5xl font-bold text-neutral-700">
            {programmes.length}
          </h1>
          <p className="text-xl font-medium">Programmes</p>
        </div>
      </div>

      <div className="w-full h-auto mt-10">
        <h1 className="mb-2 text-xl font-medium">Messages</h1>
        <MessageTable
          data={messages}
          headings={[
            "Serial No",
            "Name",

            "Mobile No",

            "Message",
            "status",
            "Actions",
          ]}
        />
      </div>
    </div>
  );
};

export default Dashboard;

export const revalidate = 0;
