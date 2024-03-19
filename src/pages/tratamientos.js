import TratamientosComponent from "@/components/page-components/projects";
import Head from "next/head";

const ProjectsPage = () => {
  return (
    <section className="container">
      <Head>
        <title>Tratamientos</title>
      </Head>
      <TratamientosComponent />
    </section>
  );
};

export default ProjectsPage;
