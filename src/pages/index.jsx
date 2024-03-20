import HomeComponent from "@/components/components/home";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="container">
      <Head>
        <title>Inicio</title>
      </Head>
      <HomeComponent />
    </section>
  );
}
