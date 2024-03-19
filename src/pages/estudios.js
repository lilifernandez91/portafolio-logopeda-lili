import CoursesComponent from "@/components/page-components/courses";
import EducationComponent from "@/components/page-components/education";
import { Divider } from "@mui/material";
import Head from "next/head";

const EducationPage = () => {
  return (
    <section className="container">
      <Head>
        <title>Mis estudios</title>
      </Head>
      <EducationComponent />
      <Divider style={{ marginTop: "32px" }} />
      <CoursesComponent />
    </section>
  );
};

export default EducationPage;
