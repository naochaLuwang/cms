import { Programme } from "@prisma/client";

import PageHeader from "../components/PageHeader";
import ProgramTable from "../components/Table/ProgramTable";
import client from "../libs/prismadb";

export const revalidate = 0;

const ProgramPage = async () => {
  const programme: Programme[] = await client.programme.findMany({});

  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Programme"
        action="Add a new Programme"
        link="/programme/add_new_programme"
      />
      <ProgramTable
        data={programme}
        headings={[
          "Serial No",
          "Program Name",
          "Program Code",
          "ProgramType",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default ProgramPage;
