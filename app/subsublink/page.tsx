import { getAllSubsubMenus } from "../actions/getAllSubsubmenu";
import Empty from "../components/Empty";

import PageHeader from "../components/PageHeader";

import SubsubMenuTable from "../components/Table/Subsubmenutable";

export const revalidate = 0;

const SubsubMenu = async () => {
  const subsubmenus = await getAllSubsubMenus();

  if (subsubmenus.length === 0) {
    return (
      <Empty
        imgp="/subsubmenu.svg"
        label="Oops! it looks like your website Sub sub Link is empty."
        href="/subsublink/add_new_subsublink"
        title="Create New Sub SubLink"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Sub SubLinks"
        action="Add a new Sub Submenu"
        link="/subsublink/add_new_subsublink"
      />
      <SubsubMenuTable
        data={subsubmenus}
        headings={[
          "Serial No",
          "Title",
          "Slug",
          "Parent Submenu",
          "Status",

          "Created By",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default SubsubMenu;
