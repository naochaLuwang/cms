import Empty from "../components/Empty";
import PageHeader from "../components/PageHeader";
import PeopleTable from "../components/Table/PeopleTable";

import { getAllPeople } from "@/app/actions/getAllPeople";

export const revalidate = 0;

const Menu = async () => {
  const people: PeopleProps[] = await getAllPeople();

  if (people.length === 0) {
    return (
      <Empty
        imgp="/people.svg"
        label="Oops! it looks like it is empty."
        href="/people/add_new_people"
        title="Create New Person"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="People"
        action="Add a new Person"
        link="/people/add_new_people"
      />
      <PeopleTable
        data={people}
        headings={[
          "Serial No",
          "Name",
          "Designation",
          "Department",
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
