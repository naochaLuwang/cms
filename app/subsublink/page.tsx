import { getAllSubsublinks } from "../actions/getAllSubsublinks";
import Empty from "../components/Empty";

import PageHeader from "../components/PageHeader";

import SubsubMenuTable from "../components/Table/Subsubmenutable";

export const revalidate = 0;

const SubsubLinkPage = async () => {
  const subsublinks = await getAllSubsublinks();

  if (subsublinks.length === 0) {
    return (
      <Empty
        imgp="/subsubmenu.svg"
        label="Oops! it looks like your website Sub sub Link is empty."
        href="/subsublink/add_new_subsublink"
        title="Create New Sub SubLink"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Sub SubLinks"
        action="Add new Sub Sublink"
        link="/subsublink/add_new_subsublink"
      />
      <SubsubMenuTable
        data={subsublinks}
        headings={[
          "Serial No",
          "Title",
          "Slug",
          "Parent Sublink",
          "Status",

          "Created By",
          "Created At",
          "Actions",
        ]}
      />
    </div>
  );
};

export default SubsubLinkPage;
