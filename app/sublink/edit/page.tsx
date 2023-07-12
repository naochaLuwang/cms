import EditSubLink from "@/app/components/Edit/EditSubmenu";
import client from "@/app/libs/prismadb";

const EditSubmenuPage = async ({ searchParams }: any) => {
  const sublink: any = await client.sublinks.findUnique({
    where: {
      id: searchParams,
    },
  });
  const links = await client.links.findMany({
    where: {
      status: "ACTIVE",
    },
    include: {
      sublinks: true,

      user: true,
    },
  });

  return (
    <>
      <EditSubLink links={links} sublink={sublink} />
    </>
  );
};

export default EditSubmenuPage;
