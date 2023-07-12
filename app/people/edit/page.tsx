import EditPeople from "@/app/components/Edit/EditPeople";
import client from "@/app/libs/prismadb";

const EditPeoplePage = async ({ searchParams }: any) => {
  const people: any = await client.people.findUnique({
    where: {
      id: searchParams.id,
    },
  });
  const departments: any = await client.department.findMany({});
  const designations: any = await client.designation.findMany({});

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
