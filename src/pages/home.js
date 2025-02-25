import Hero from "../components/hero/Hero";
import SelectedWork from "../components/selectedWork/selected-work";
import Contact from "../components/contact/Contact";

export function Home() {
  return (
    <>
      <div>
        <Hero />
        <SelectedWork />
        <Contact />
      </div>
    </>
  );
}

export default Home;