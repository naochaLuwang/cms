import NewSubMenu from "../../components/Submenu/New";

async function getMenus() {
  const res = await fetch(`${process.env.API_URL}/api/menu`, {
    cache: "no-store",
  });
  return res.json();
}

const NewSubMenupage = async () => {
  const menus = await getMenus();

  return (
    <div className="w-full h-auto">
      <NewSubMenu menus={menus} />
    </div>
  );
};

export default NewSubMenupage;
