import EditSubMenuPage from "@/app/components/EditSubmenu";

import { getSubMenu } from "@/app/actions/getSubmenu";
import { getAllMenus } from "@/app/actions/getAllMenus";

const EditSubmenuPage = async ({ searchParams }: any) => {
  const submenus = await getSubMenu(searchParams.id);
  const menus = await getAllMenus();

  return (
    <>
      <EditSubMenuPage submenu={submenus} menus={menus} />
    </>
  );
};

export default EditSubmenuPage;
