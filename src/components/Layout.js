import Header from "./header/Header";
import Footer from "./footer";
import Contact from "./contact/Contact";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <main  className="main-content">
        <Outlet />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
