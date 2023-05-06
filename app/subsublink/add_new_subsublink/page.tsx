import { getAllSubLinks } from "@/app/actions/getAllSubLinks";
import NewSubsubLinks from "@/app/components/NewSubsublink";

const NewSubsubMenupage = async () => {
  const sublinks = await getAllSubLinks();

  return (
    <div className="w-full h-auto">
      <NewSubsubLinks sublinks={sublinks} />
    </div>
  );
};

export default NewSubsubMenupage;
