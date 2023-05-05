import { getMenu } from "@/app/actions/getMenu";
import EditMenu from "../../components/EditMenu";
import { getDepartment } from "@/app/actions/getDepartment";
import EditDepartment from "@/app/components/EditDepartment";

const EditDepartmentPage = async ({ searchParams }: any) => {
  const department = await getDepartment(searchParams.id);

  return (
    <>
      <EditDepartment department={department} />
    </>
  );
};

export default EditDepartmentPage;
