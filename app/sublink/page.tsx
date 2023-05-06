import { getAllSubMenus } from "../actions/getAllSubMenus";
import Empty from "../components/Empty";

import PageHeader from "../components/PageHeader";
import SubMenuTable from "../components/Table/SubMenuTable";

const SubMenu = async () => {
  const submenus = await getAllSubMenus();

  if (submenus.length === 0) {
    return (
      <Empty
        imgp="/subsubmenu.svg"
        label="Oops! it looks like your website Sub Link is empty."
        href="/sublink/add_new_sublink"
        title="Create New Sub Link"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Sub Links"
        action="Add a new Sub Link"
        link="/sublink/add_new_sublink"
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
