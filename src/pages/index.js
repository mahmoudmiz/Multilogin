import * as React from "react";
import Nav from "../components/Nav";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
const IndexPage = () => {
  return (
    <main className="container-xxl mt-4">
      <Nav />
      <HeroBanner />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
