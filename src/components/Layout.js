import Header from "./header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
