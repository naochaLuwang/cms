import { create, State, SetState } from "zustand";

interface ActiveSidebarProps extends State {
  title: string;
  setTitle: (title: string) => void;
}

const activeSidebar = create<ActiveSidebarProps>(
  (set: SetState<ActiveSidebarProps>) => ({
    title: "Dashboard",

    setTitle: (title) => set(() => ({ title })),
  })
);

export default activeSidebar;
