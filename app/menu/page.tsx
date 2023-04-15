import React from "react";
import { getAllMenus } from "../actions/getAllMenus";
import ClientOnly from "../components/ClientOnly";
import PageHeader from "../components/PageHeader";

const Menu = async () => {
  const menus = await getAllMenus();
  return (
    <div className="w-full h-auto">
      {/* {menus.map((menu: any) => (
        <div key={menu.id}>
          {menu.title}
          {menu.submenus.map((submenu: any) => (
            <div key={submenu.id}>{submenu.title}</div>
          ))}
        </div>
      ))} */}
      <ClientOnly>
        <PageHeader />
      </ClientOnly>
    </div>
  );
};

export default Menu;
