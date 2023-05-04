import { getAlbulm } from "@/app/actions/getAlbulm";
import EditAlbulm from "../../components/albulm/EditAlbulm";

const EditAlbulmPage = async ({ searchParams }: any) => {
  const albulm = await getAlbulm(searchParams.id);

  return (
    <>
      <EditAlbulm albulm={albulm} />
    </>
  );
};

export default EditAlbulmPage;
