import EditDesignation from "@/app/components/Edit/EditDesignation";
import client from "@/app/libs/prismadb";

const EditDesignationPage = async ({ searchParams }: any) => {
  const designation: any = await client.designation.findUnique({
    where: {
      id: searchParams.id,
    },
  });

  return (
    <>
      <EditDesignation designation={designation} />
    </>
  );
};

export default EditDesignationPage;
