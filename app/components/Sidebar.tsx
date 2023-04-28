"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import activeSidebar from "../hooks/activeSidebar";

interface NavItem {
  label?: string;
  sublabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

interface SidebarProps extends NavItem {
  orgName: string;
}

const Sidebar: React.FC<SidebarProps> = ({ orgName }) => {
  return (
    <div className="flex-shrink-0 w-64 min-h-screen px-4 py-4 overflow-y-hidden bg-[#081A51] bg-opacity-100">
      <h1 className="text-xl font-semibold text-white">{orgName}</h1>
      <div className="flex flex-col mt-5">
        {NAV_ITEMS.map((navItem) => (
          <SideBarNavItem key={navItem.label} {...navItem} />
        ))}
      </div>
      <h1 onClick={() => signOut()}>Sign Out</h1>
    </div>
  );
};

const SideBarNavItem = ({ label, children, href }: SidebarProps) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { title, setTitle } = activeSidebar();
  const router = useRouter();

  console.log(isSubMenuOpen);

  const toggleSubMenu = () => {
    // setTitle(label);
    // console.log(title);

    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleClick = (href: string) => {
    setTitle(label!);

    if (!children || href === "#") {
      setIsSubMenuOpen(true);
    } else {
      setIsSubMenuOpen(!isSubMenuOpen);
    }

    router.push(href);
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        className={`flex items-center justify-between px-3 py-2 text-white rounded-lg cursor-pointer hover:text-white hover:bg-white hover:bg-opacity-20 ${
          title === label &&
          !children &&
          "bg-white bg-opacity-20 text-yellow-400 hover:text-yellow-400 hover:bg-opacity-20"
        } ${
          title === label &&
          children &&
          isSubMenuOpen &&
          "bg-opacity-20 bg-white text-white"
        } `}
        onClick={children ? toggleSubMenu : () => handleClick(href!)}
      >
        <h1 className="text-lg font-base">{label}</h1>
        {children && (
          <ChevronDownIcon
            className={`w-6 h-6 text-white ${
              isSubMenuOpen &&
              "transform rotate-180 transition-transform duration-300 ease-in-out"
            }`}
          />
        )}
      </div>
      <div>
        {children &&
          isSubMenuOpen &&
          children.map((child) => (
            <div
              key={child.label}
              className={`flex items-center justify-between px-3 py-2 text-white rounded-lg cursor-pointer hover:text-white hover:bg-white hover:bg-opacity-20 ${
                title === label &&
                !children &&
                "bg-white bg-opacity-20 text-yellow-400 hover:text-yellow-400 hover:bg-opacity-20"
              } ${
                title === label &&
                children &&
                isSubMenuOpen &&
                "bg-opacity-20 bg-white text-white"
              } `}
              onClick={() => handleClick(child.href!)}
            >
              {child.label}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;

const NAV_ITEMS: Array<NavItem> = [
  { label: "Dashboard", href: "/dashboard" },
  {
    label: "Navigation",
    href: "#",
    children: [
      {
        label: "View Menu",
        href: "/menu",
      },
      {
        label: "Add New Menu",
        href: "/add_new_menu",
      },
    ],
  },
  {
    label: "Site Setting",
    href: "#",
    children: [
      {
        label: "Organization Setting",
        href: "/orgsetting",
      },
      {
        label: "Add New Menu",
        href: "/add_new_menu",
      },
    ],
  },
];
