import React from "react";
import { getAllMenus } from "../actions/getAllMenus";

import PageHeader from "../components/PageHeader";
import Table from "../components/Table";

export const revalidate = 0;

const Menu = async () => {
  const menus = await getAllMenus();
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Menu"
        action="Add a new Menu"
        link="/menu/add_new_menu"
      />
      <Table
        data={menus}
        headings={[
          "Serial No",
          "Title",
          "Slug",
          "Submenu",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default Menu;
