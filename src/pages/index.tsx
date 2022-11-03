import type { NextPage } from "next";
import Head from "next/head";
import House from "../components/House";
import Statistics from "../components/Statistics";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Housing</title>
        <meta name="description" content="Test App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Statistics />
      <House />
    </>
  );
};

export default Home;
