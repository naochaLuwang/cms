import { getAllUsers } from "../actions/getAllUsers";
import Empty from "../components/Empty";
import PageHeader from "../components/PageHeader";
import UserTable from "../components/UserTable";

interface UserProps {
  id: string;
  email: string;
  name: string;

  hashedPassword: string;
  createdAt: string;
  updatedAt: string;
}

export const revalidate = 0;

const UserPage = async () => {
  const users: UserProps[] = await getAllUsers();

  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Users"
        action="Add a new User"
        link="/user/add_new_user"
      />
      <UserTable
        data={users}
        headings={[
          "Serial No",
          "Name",
          "Email",
          //   "Status",

          //   "Created By",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default UserPage;
