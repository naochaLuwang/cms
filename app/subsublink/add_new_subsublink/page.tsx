import NewSubsubMenu from "@/app/components/NewSubsubmenu";

async function getSubMenus() {
  const res = await fetch(`${process.env.API_URL}/api/submenu`, {
    cache: "no-store",
  });
  return res.json();
}

const NewSubsubMenupage = async () => {
  const submenus = await getSubMenus();
  console.log(submenus);
  return (
    <div className="w-full h-auto">
      <NewSubsubMenu submenus={submenus} />
    </div>
  );
};

export default NewSubsubMenupage;
