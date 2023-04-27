import React from "react";
import { getAllMenus } from "../../actions/getAllMenus.ts";
import ClientOnly from "../../components/ClientOnly";
import PageHeader from "../../components/PageHeader";
import Table from "../../components/Table";

import axios from "axios";

const Menu = async () => {
  const menus = await getAllMenus();
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Menu"
        action="Add a new Menu"
        link="/dashboard/menu/add_new_menu"
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
