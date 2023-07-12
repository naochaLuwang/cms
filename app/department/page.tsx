import { Department } from "@prisma/client";

import Empty from "../components/Empty";
import PageHeader from "../components/PageHeader";
import DepartmentTable from "../components/Table/DepartmentTable";
import client from "../libs/prismadb";

export const revalidate = 0;

const DepartmentPage = async () => {
  const departments: Department[] = await client.department.findMany({});

  if (departments.length === 0) {
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
        title="Department"
        action="Add a new Department"
        link="/department/add_new_department"
      />
      <DepartmentTable
        data={departments}
        headings={[
          "Serial No",
          "Department Name",
          "Order",
          "Status",

          "Created By",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default DepartmentPage;
