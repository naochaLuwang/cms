import { getProgramme } from "@/app/actions/getProgramme";
import EditProgramme from "@/app/components/Edit/EditProgramme";

const EditProgrammePage = async ({ searchParams }: any) => {
  const programme = await getProgramme(searchParams.id);

  return (
    <>
      <EditProgramme programme={programme} />
    </>
  );
};

export default EditProgrammePage;
