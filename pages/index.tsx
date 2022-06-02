import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I&apos;m a Frontend Engineer.</p>
        <p>My Tech Stack: HTML, CSS, JS/TS, React/Next, Tailwind</p>
      </section>
    </Layout>
  );
}
