import NewSubLink from "@/app/components/Submenu/NewSubLink";
import client from "@/app/libs/prismadb";

const NewSubLinkpage = async () => {
  const links: any = await client.links.findMany({
    include: {
      sublinks: true,
      user: true,
    },
  });

  return (
    <div className="w-full h-auto">
      <NewSubLink links={links} />
    </div>
  );
};

export default NewSubLinkpage;
