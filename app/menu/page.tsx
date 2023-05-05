import Empty from "../components/Empty";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table/Table";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { getAllMenus } from "@/app/actions/getAllMenus";

export const revalidate = 0;

const Menu = async () => {
  const user = await getCurrentUser();
  const menus = await getAllMenus();

  console.log(user);
  console.log(menus);

  if (menus.length === 0) {
    return (
      <Empty
        imgp="/menu.svg"
        label="Oops! it looks like your website menu is empty."
        href="/menu/add_new_menu"
        title="Create New Menu"
      />
    );
  }
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
