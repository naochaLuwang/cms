import { getAllDesignation } from "../actions/getAllDesignation";
import Empty from "../components/Empty";
import PageHeader from "../components/PageHeader";

import DesignationTable from "../components/Table/DesignationTable";

export const revalidate = 0;

const DesignationPage = async () => {
  const designations: DesignationProps[] = await getAllDesignation();

  if (designations.length === 0) {
    return (
      <Empty
        imgp="/menu.svg"
        label="Oops! it looks like your website menu is empty."
        href="/menu/add_new_menu"
        title="Create New Menu"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Designation"
        action="Add a new Designation"
        link="/designation/add_new_designation"
      />
      <DesignationTable
        data={designations}
        headings={[
          "Serial No",
          "Designation",

          "Status",

          "Created By",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default DesignationPage;
