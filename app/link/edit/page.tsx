import { getMenu } from "@/app/actions/getMenu";
import EditMenu from "../../components/Edit/EditMenu";

const EditPage = async ({ searchParams }: any) => {
  const menus = await getMenu(searchParams.id);
  console.log(menus);

  return (
    <>
      <EditMenu menu={menus} />
    </>
  );
};

export default EditPage;
