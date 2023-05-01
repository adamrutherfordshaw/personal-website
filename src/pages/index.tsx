import Head from "next/head";
import { Inter } from "next/font/google";
import { HoldingPage } from "@/components/holding-page/holding-page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Rutherford-Shaw</title>
        <meta name="description" content="Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HoldingPage />
      </main>
    </>
  );
}
