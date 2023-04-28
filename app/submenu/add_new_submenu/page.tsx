import NewSubMenu from "../../components/Submenu/New";

async function getMenus() {
  const res = await fetch("http://localhost:3000/api/menu", {
    cache: "no-store",
  });
  return res.json();
}

const NewSubMenupage = async () => {
  const menus = await getMenus();
  console.log(menus);
  return (
    <div className="w-full h-auto">
      <NewSubMenu menus={menus} />
    </div>
  );
};

export default NewSubMenupage;
