import Empty from "../components/Empty";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table/Table";

import { getAllMenus } from "@/app/actions/getAllMenus";

export const revalidate = 0;

const Menu = async () => {
  const menus = await getAllMenus();

  if (menus.length === 0) {
    return (
      <Empty
        imgp="/menu.svg"
        label="Oops! it looks like your website Link is empty."
        href="/link/add_new_link"
        title="Create New Menu"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Links"
        action="Add a new Link"
        link="/link/add_new_link"
      />
      <Table
        data={menus}
        headings={[
          "Serial No",
          "Title",
          "Slug",
          "Status",

          "Created By",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default Menu;
