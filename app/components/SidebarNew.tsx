"use client";

import { useRef } from "react";
import SubMenu from "./SubMenu";

import { useSession } from "next-auth/react";

// * React icons

import { SlLogout, SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { MdPeople } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();

  const { data: session } = useSession();

  const subMenusList = [
    {
      name: "Pages",
      icon: RiBuilding3Line,
      //   menus: ["auth", "app settings", "stroage", "hosting"],
      menus: [
        {
          label: "View Link",
          href: "/link",
        },
        {
          label: "Add New Link",
          href: "/link/add_new_link",
        },
        {
          label: "View Sub Link",
          href: "/sublink",
        },
        {
          label: "Add New Sub Link",
          href: "/sublink/add_new_sublink",
        },
        {
          label: "View Sub Sub Link",
          href: "/subsublink",
        },
        {
          label: "Add New Sub Sub Link",
          href: "/subsublink/add_new_subsublink",
        },
      ],
    },
    {
      name: "Images",
      icon: IoImagesOutline,

      menus: [
        {
          label: "Carousal Images",
          href: "/carousalimage",
        },
        {
          label: "Album",
          href: "/albulm",
        },
      ],
    },
    {
      name: "Department",
      icon: TbReportAnalytics,

      menus: [
        {
          label: "View Department",
          href: "/department",
        },
        {
          label: "Add New Department",
          href: "/department/add_new_department",
        },
      ],
    },
    {
      name: "Designation",
      icon: TbReportAnalytics,

      menus: [
        {
          label: "View Designation",
          href: "/designation",
        },
        {
          label: "Add New Designation",
          href: "/designation/add_new_designation",
        },
      ],
    },
    {
      name: "People",
      icon: MdPeople,

      menus: [
        {
          label: "View People",
          href: "/people",
        },
        {
          label: "Add New Person",
          href: "/people/add_new_people",
        },
      ],
    },
    {
      name: "Programme",
      icon: MdPeople,

      menus: [
        {
          label: "View Programme",
          href: "/programme",
        },
        {
          label: "Add New Programme",
          href: "/programme/add_new_programme",
        },
      ],
    },
    {
      name: "Testimonial",
      icon: MdPeople,

      menus: [
        {
          label: "View Testimonial",
          href: "/testimonial",
        },
        {
          label: "Add New Testimonial",
          href: "/testimonial/add_new_testimonial",
        },
      ],
    },
  ];

  if (!session) {
    return <></>;
  }
  return (
    <div>
      <div
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <span className="text-xl whitespace-pre">Rely CMS 2</span>
        </div>

        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-full h-full">
            <li>
              <Link
                href={"/dashboard"}
                className={`link  capitalize hover:bg-blue-100 hover:border-l-2 hover:border-blue-800 hover:bg-opacity-50 ${
                  pathname == "/dashboard" && "text-blue-800 w-full bg-blue-100"
                }`}
              >
                <AiOutlineAppstore size={23} className="min-w-max" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href={"/users"}
                className={`link  capitalize hover:bg-blue-100 hover:border-l-2 hover:border-blue-800 hover:bg-opacity-50 ${
                  pathname == "/users" && "text-blue-800 w-full bg-blue-100"
                }`}
              >
                <BsPerson size={23} className="min-w-max" />
                Users
              </Link>
            </li>

            <div className="py-5 border-y border-slate-300 max-h-[32rem] overflow-y-auto">
              <small className="inline-block pl-3 mb-2 text-slate-500">
                Site
              </small>
              {subMenusList?.map((menu) => (
                <div key={menu.name} className="flex flex-col gap-1">
                  <SubMenu data={menu} />
                </div>
              ))}
            </div>

            <div className="py-5 ">
              <small className="inline-block pl-3 mb-2 text-slate-500">
                Site Settings
              </small>
              <Link
                href={"/orgsetting"}
                className={`link  capitalize hover:bg-blue-100 hover:border-l-2 hover:border-blue-800 hover:bg-opacity-50 ${
                  pathname == "/orgsetting" &&
                  "text-blue-800 w-full bg-blue-100"
                }`}
              >
                <SlSettings size={23} className="min-w-max" />
                Organization Setting
              </Link>
              <div
                onClick={() => signOut()}
                className={`link mt-2  capitalize   font-semibold bg-rose-500 text-white`}
              >
                <SlLogout size={23} className="min-w-max" />
                Sign Out
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
