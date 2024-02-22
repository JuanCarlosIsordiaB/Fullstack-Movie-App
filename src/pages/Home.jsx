import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../req";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title="Top Worldwide 🌎" fetchUrl={requests.requestTop} />
      <Row rowId='2' title="Upcoming 🔝" fetchUrl={requests.requestUpcoming} />
      <Row rowId='3' title="Trending 🔥 " fetchUrl={requests.requestTrending} />
      <Row rowId='4' title="Most Popular 🏆" fetchUrl={requests.requestPopular} />
      <Footer />
    </>
  );
};
export default Home;
