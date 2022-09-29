import React from "react";
import { About } from "../About/About";
import { Resume } from "../Resume/Resume";
import { Header } from "../Header/Header";
import { Works } from "../Works/Works";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Resume />
      <Works />
    </>
  );
};
