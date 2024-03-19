import ContactoComponent from "@/components/page-components/contacto";
import Head from "next/head";

const ContactoPage = () => {
  return (
    <section className="container">
      <Head>
        <title>Mis estudios</title>
      </Head>
      <ContactoComponent />
    </section>
  );
};

export default ContactoPage;
