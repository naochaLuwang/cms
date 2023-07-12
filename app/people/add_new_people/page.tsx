import NewPeople from "../../components/NewPeople";
import client from "@/app/libs/prismadb";
import { Department, Designation } from "@prisma/client";

const NewPeoplepage = async () => {
  const department: Department[] = await client.department.findMany({});
  const designations: Designation[] = await client.designation.findMany({});

  return (
    <div className="w-full h-auto">
      <NewPeople department={department} designations={designations} />
    </div>
  );
};

export default NewPeoplepage;
