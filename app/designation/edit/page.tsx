import { getDesignation } from "@/app/actions/getDesignation";

import EditDesignation from "@/app/components/Edit/EditDesignation";

const EditDesignationPage = async ({ searchParams }: any) => {
  const designation = await getDesignation(searchParams.id);

  return (
    <>
      <EditDesignation designation={designation} />
    </>
  );
};

export default EditDesignationPage;
