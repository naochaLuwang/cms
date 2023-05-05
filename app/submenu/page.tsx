import { getAllSubMenus } from "../actions/getAllSubMenus";
import Empty from "../components/Empty";

import PageHeader from "../components/PageHeader";
import SubMenuTable from "../components/SubMenuTable";

const SubMenu = async () => {
  const submenus = await getAllSubMenus();

  if (submenus.length === 0) {
    return (
      <Empty
        imgp="/subsubmenu.svg"
        label="Oops! it looks like your website Sub Menu is empty."
        href="/submenu/add_new_submenu"
        title="Create New Submenu"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Sub Menu"
        action="Add a new Submenu"
        link="/menu/add_new_submenu"
      />
      <SubMenuTable
        data={submenus}
        headings={[
          "Serial No",
          "Title",
          "Slug",
          "Parent Menu",
          "Status",

          "Created By",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default SubMenu;

export const revalidate = 0;
