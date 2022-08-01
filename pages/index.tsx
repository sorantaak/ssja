import type { NextPage } from "next";
import Head from "next/head";
import Strings from "../data/strings";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content={Strings.sajaHomePageDescriptionMetaTag}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>به سامانه ثحا خوش آمدید1235658</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
