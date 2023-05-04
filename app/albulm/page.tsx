import { getAllAlbulms } from "../actions/getAllAlbulms";
import Empty from "../components/Empty";
import Heading from "../components/Heading";
import AlbulmCard from "../components/albulm/AlbulmCard";
import Link from "next/link";

interface AlbulmProps {
  id: string;
  title: string;
  thumbnailImage: string;
  images: ImageProps[];
}

interface ImageProps {
  id: string;
  albulmId: string;
  imageUrl: string;
}

const AlbulmPage = async () => {
  const albulms: AlbulmProps[] = await getAllAlbulms();

  if (albulms.length === 0) {
    return (
      <Empty
        imgp="/albulm.svg"
        label="Oops! it looks like your albulm is empty."
        href="/albulm/create"
        title="Create New Albulm"
      />
    );
  }

  return (
    <div className="flex flex-col w-full max-h-screen px-10 py-10">
      <Heading title="Albulm" />
      {albulms.map((albulm) => (
        <Link href={`/albulm/edit?id=${albulm.id}`} key={albulm.id}>
          <AlbulmCard
            image={albulm.thumbnailImage}
            title={albulm.title}
            count={albulm.images.length}
          />
        </Link>
      ))}
    </div>
  );
};

export default AlbulmPage;
