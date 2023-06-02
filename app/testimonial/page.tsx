import Empty from "../components/Empty";

import PageHeader from "../components/PageHeader";
import TestimonialTable from "../components/Table/TestimonialTable";
import { getAllTestimonials } from "../actions/getAllTestimonial";

const SubLinkPage = async () => {
  const testimonials = await getAllTestimonials();

  if (testimonials.length === 0) {
    return (
      <Empty
        imgp="/subsubmenu.svg"
        label="Oops! it looks like your website Sub Link is empty."
        href="/sublink/add_new_sublink"
        title="Create New Sub Link"
      />
    );
  }
  return (
    <div className="w-full h-auto">
      <PageHeader
        title="Testimonials"
        action="Add New Testimonial"
        link="/testimonial/add_new_testimonial"
      />
      <TestimonialTable
        data={testimonials}
        headings={["Serial No", "Name", "Title", "Created At", "Actions"]}
      />
    </div>
  );
};

export default SubLinkPage;

export const revalidate = 0;
