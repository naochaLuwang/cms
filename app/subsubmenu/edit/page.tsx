import { getSubsubMenu } from "@/app/actions/getSubsubMenu";
import { getAllSubMenus } from "@/app/actions/getAllSubMenus";
import EditSubSubMenu from "@/app/components/EditSubSubMenuPage";

const EditSubsubmenuPage = async ({ searchParams }: any) => {
  const subsubmenus = await getSubsubMenu(searchParams.id);
  const submenus = await getAllSubMenus();

  return (
    <>
      <EditSubSubMenu subsubmenu={subsubmenus} submenus={submenus} />
    </>
  );
};

export default EditSubsubmenuPage;
