import React from "react";
import { About } from "../About/About";
import { Experience } from "../Experience/Experience";
import { Header } from "../Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
    </>
  );
};
