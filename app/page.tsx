import ClientOnly from "./components/ClientOnly";
import LoginForm from "./components/Login/Login";

import ToasterProvider from "./providers/ToasterProvider";

export default function Home() {
  return (
    <main className="">
      <ClientOnly>
        <ToasterProvider />
        <LoginForm />
      </ClientOnly>
    </main>
  );
}
