interface DepartmentProps {
  id: string;
  departmentName: string;
  departmentCode: string;
  order: 1;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

interface DesignationProps {
  id: string;
  designationName: string;
  designationCode: string;

  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

interface SelectProps {
  id: string;

  departmentName?: string;
  designations?: DesignationProps[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  departments?: any;
  label?: string;
}

interface MenuForm {
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  content: string;
  pageType: "dynamic" | "static";
}

interface MenuProps {
  id: string;
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  pageType: "dynamic" | "static";
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  submenus: SubMenuProps[];
  user: User;
}

interface User {
  id: string;
  email: string;
  name: string;
  emailVerified: boolean;
  hashedPassword: string;
  createdAt: string;
  updatedAt: string;
}

interface SubMenuProps {
  id: string;
  menuId: string;
  userId: string;
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  content: string;
  pageType: "static" | "dynamic";
  createdAt: string;
  updatedAt: string;
  Subsubmenu: SubsubmenuProps[];
}

interface SubsubmenuProps {
  id: string;
  submenuId: string;
  userId: string;
  title: string;
  slug: string;
  order: number;
  status: "ACTIVE" | "INACTIVE";
  content: string;
  pageType: "static" | "dynamic";
  createdAt: string;
  updatedAt: string;
}

interface DepartmentProps {
  id: string;
  departmentName: string;
  departmentCode: string;
  order: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

interface PeopleProps {
  id: string;
  firstName: string;
  slug: string;
  lastName: string;
  email: string;
  phone: string;
  departmentId: string;
  designationId: string;
  showEmail: string;
  showPhone: string;
  status: string;
  profileUrl: string;
  bio: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  department: DepartmentProps;
  designation: DesignationProps;
}

interface DesignationProps {
  id: string;
  designationName: string;
  designationCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

interface carousalimageProps {
  id: string;
  userId: string;
  title: string;
  imgUrl: string;
  status: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}
