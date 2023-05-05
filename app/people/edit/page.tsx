import { getAllDepartments } from "@/app/actions/getAllDepartments";
import { getAllDesignation } from "@/app/actions/getAllDesignation";
import { getPerson } from "@/app/actions/getPerson";
import EditPeople from "@/app/components/Edit/EditPeople";

const EditPeoplePage = async ({ searchParams }: any) => {
  const people = await getPerson(searchParams.id);
  const departments = await getAllDepartments();
  const designations = await getAllDesignation();

  return (
    <>
      <EditPeople
        person={people}
        department={departments}
        designation={designations}
      />
    </>
  );
};

export default EditPeoplePage;
