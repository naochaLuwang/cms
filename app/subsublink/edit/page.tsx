import { getSubsubLink } from "@/app/actions/getSubsublink";
import { getAllSubLinks } from "@/app/actions/getAllSubLinks";

import EditSubSubLink from "@/app/components/Edit/EditSubSubLink";

const EditSubsublinkPage = async ({ searchParams }: any) => {
  const subsublink = await getSubsubLink(searchParams.id);
  const sublinks = await getAllSubLinks();

  return (
    <>
      <EditSubSubLink subsublink={subsublink} sublinks={sublinks} />
    </>
  );
};

export default EditSubsublinkPage;
