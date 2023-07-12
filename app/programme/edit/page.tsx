import EditProgramme from "@/app/components/Edit/EditProgramme";
import client from "@/app/libs/prismadb";

const EditProgrammePage = async ({ searchParams }: any) => {
  const programme: any = await client.programme.findUnique({
    where: {
      id: searchParams.id,
    },
  });

  return (
    <>
      <EditProgramme programme={programme} />
    </>
  );
};

export default EditProgrammePage;
