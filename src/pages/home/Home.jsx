import { About } from "../../components/About/About";
import { Resume } from "../../components/Resume/Resume";
import { Header } from "../../components/Header/Header"
import { Works } from "../../components/Works/Works";
import { Contact } from "../../components/Contact/Contact";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Works />
      <Contact />
    </>
  );
};
